import React from 'react';

export interface MinaSixDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixDiamond: React.FC<MinaSixDiamondProps>;
export default MinaSixDiamond;
