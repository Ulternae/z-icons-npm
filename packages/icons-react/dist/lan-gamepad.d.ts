import React from 'react';

export interface LanGamepadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepad: React.FC<LanGamepadProps>;
export default LanGamepad;
