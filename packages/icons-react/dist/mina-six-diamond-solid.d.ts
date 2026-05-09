import React from 'react';

export interface MinaSixDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixDiamondSolid: React.FC<MinaSixDiamondSolidProps>;
export default MinaSixDiamondSolid;
