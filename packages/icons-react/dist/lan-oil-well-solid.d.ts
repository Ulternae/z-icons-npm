import React from 'react';

export interface LanOilWellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilWellSolid: React.FC<LanOilWellSolidProps>;
export default LanOilWellSolid;
