import React from 'react';

export interface LanCubesStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesStackedSolid: React.FC<LanCubesStackedSolidProps>;
export default LanCubesStackedSolid;
