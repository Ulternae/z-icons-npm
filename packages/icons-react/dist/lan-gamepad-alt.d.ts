import React from 'react';

export interface LanGamepadAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadAlt: React.FC<LanGamepadAltProps>;
export default LanGamepadAlt;
