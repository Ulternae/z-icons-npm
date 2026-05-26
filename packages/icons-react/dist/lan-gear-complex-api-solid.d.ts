import React from 'react';

export interface LanGearComplexApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearComplexApiSolid: React.FC<LanGearComplexApiSolidProps>;
export default LanGearComplexApiSolid;
