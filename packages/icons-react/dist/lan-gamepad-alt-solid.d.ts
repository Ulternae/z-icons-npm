import React from 'react';

export interface LanGamepadAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadAltSolid: React.FC<LanGamepadAltSolidProps>;
export default LanGamepadAltSolid;
