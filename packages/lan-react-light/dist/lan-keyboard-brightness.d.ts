import React from 'react';

export interface LanKeyboardBrightnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeyboardBrightness(props: LanKeyboardBrightnessProps): React.ReactElement;
export default LanKeyboardBrightness;
