import React from 'react';

export interface LanKeyboardBrightnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardBrightness: React.FC<LanKeyboardBrightnessProps>;
export default LanKeyboardBrightness;
