import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import React from 'react';
import { ToggleProps } from './types';

export const labelPositions: ToggleProps['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
export const sizes: ToggleProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.FC<ToggleTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toggle
};
