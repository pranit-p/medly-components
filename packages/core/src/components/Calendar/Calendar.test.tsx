import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { Calendar } from './Calendar';
import { CALENDAR_MONTHS } from './constants';
import { getMonthAndDateFromDate } from './helper';

describe('Calendar Component', () => {
    afterAll(TestUtils.cleanup);
    it('should render given date', () => {
        const date = new Date(2020, 0, 1),
            { container } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        expect(container).toHaveTextContent('Jan 2020');
        expect(container).toMatchSnapshot();
    });

    it('should render current month if date is null', () => {
        const { container } = TestUtils.render(<Calendar date={null} onChange={jest.fn()} />),
            { month, year } = getMonthAndDateFromDate(new Date());
        expect(container).toHaveTextContent(`${CALENDAR_MONTHS[month]} ${year}`);
    });

    it('should call onChange with expected date', () => {
        const mockOnChange = jest.fn(),
            dateToSelect = new Date(2020, 1, 1),
            { container, getByText, getByTitle } = TestUtils.render(<Calendar date={null} onChange={mockOnChange} />);

        TestUtils.fireEvent.click(container.querySelector('#month-selector-input'));
        TestUtils.fireEvent.click(getByText('Feb'));
        TestUtils.fireEvent.click(container.querySelector('#year-selector-input'));
        TestUtils.fireEvent.click(getByText('2020'));
        TestUtils.fireEvent.click(getByTitle(dateToSelect.toDateString()));
        expect(mockOnChange).toHaveBeenCalledWith(dateToSelect);
    });

    it('should render previous month on clicking left arrow when current month is other than Jan', () => {
        const date = new Date(2020, 1, 1),
            { container, getByText } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        TestUtils.fireEvent.click(getByText('<'));
        expect(container).toHaveTextContent(`Jan 2020`);
    });

    it('should render dec month on clicking left arrow when current month is Jan', () => {
        const date = new Date(2020, 0, 1),
            { container, getByText } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        TestUtils.fireEvent.click(getByText('<'));
        expect(container).toHaveTextContent(`Dec 2019`);
    });

    it('should render next month on clicking right arrow when current month is other than Dec', () => {
        const date = new Date(2020, 1, 1),
            { container, getByText } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        TestUtils.fireEvent.click(getByText('>'));
        expect(container).toHaveTextContent(`Mar 2020`);
    });

    it('should render Jan month on clicking right arrow when current month is Dec', () => {
        const date = new Date(2020, 11, 1),
            { container, getByText } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        TestUtils.fireEvent.click(getByText('>'));
        expect(container).toHaveTextContent(`Jan 2021`);
    });

    it('should render 29 days in feb month in leap year', () => {
        const date = new Date(2020, 1, 1),
            { container, getByTitle } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        expect(container).toContainElement(getByTitle('Sat Feb 29 2020'));
    });

    it('should render 28 days in feb month in non leap year', () => {
        const date = new Date(2021, 1, 1),
            { queryByText } = TestUtils.render(<Calendar date={date} onChange={jest.fn()} />);

        expect(queryByText('29')).toBeNull();
    });
});