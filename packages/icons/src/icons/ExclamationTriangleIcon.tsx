// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ExclamationTriangleSvg from '../assets/ExclamationTriangle.svg';
import SvgIcon, { Props } from '../SvgIcon';

const ExclamationTriangleIcon: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <ExclamationTriangleSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

ExclamationTriangleIcon.Style = SvgIcon;
ExclamationTriangleIcon.displayName = 'ExclamationTriangleIcon';
export default ExclamationTriangleIcon;
