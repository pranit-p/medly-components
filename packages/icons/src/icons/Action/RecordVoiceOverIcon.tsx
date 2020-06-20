import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RecordVoiceOverIconSvg from '../../assets/Action/record_voice_over_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RecordVoiceOverIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RecordVoiceOverIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RecordVoiceOverIcon.Style = SvgIcon;
RecordVoiceOverIcon.displayName = 'RecordVoiceOverIcon';

export default RecordVoiceOverIcon
