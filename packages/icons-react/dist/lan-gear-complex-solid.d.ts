import React from 'react';

export interface LanGearComplexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexSolid: React.FC<LanGearComplexSolidProps>;
export default LanGearComplexSolid;
