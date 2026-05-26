import React from 'react';

export interface LanGamepadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadThin: React.FC<LanGamepadThinProps>;
export default LanGamepadThin;
