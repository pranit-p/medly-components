import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import { Props } from './types';

const uppercase = () => css`
    text-transform: uppercase;
`;

const lineThrough = () => css`
    text-decoration: line-through;
`;
const getTextStyle = ({ theme, ...props }: Props) => {
    const { textColor, textVariant, textWeight } = props,
        { defaults, weights, variants } = theme.font,
        { fontSize, fontWeight, lineHeight, letterSpacing } = variants[textVariant || defaults.variant];

    return css`
        margin: 0;
        color: ${textColor};
        font-size: ${fontSize};
        font-weight: ${weights[textWeight || fontWeight]};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
    `;
};

export const TextStyled = styled('span')<Props>`
    ${getTextStyle}

    ${({ fullWidth, theme }) =>
        fullWidth &&
        css`
            display: block;
            margin: ${theme.spacing.S} 0;
        `}

    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
`;

TextStyled.defaultProps = {
    theme: defaultTheme
};
