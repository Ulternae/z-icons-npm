import React from 'react';

export interface MinaDotsDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsDiamondSolid: React.FC<MinaDotsDiamondSolidProps>;
export default MinaDotsDiamondSolid;
