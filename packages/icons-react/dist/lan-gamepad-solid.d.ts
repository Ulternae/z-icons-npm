import React from 'react';

export interface LanGamepadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadSolid: React.FC<LanGamepadSolidProps>;
export default LanGamepadSolid;
