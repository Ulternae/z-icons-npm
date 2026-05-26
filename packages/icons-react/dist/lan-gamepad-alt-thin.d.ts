import React from 'react';

export interface LanGamepadAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadAltThin: React.FC<LanGamepadAltThinProps>;
export default LanGamepadAltThin;
