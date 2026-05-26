import React from 'react';

export interface LanGearCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearCodeSolid: React.FC<LanGearCodeSolidProps>;
export default LanGearCodeSolid;
