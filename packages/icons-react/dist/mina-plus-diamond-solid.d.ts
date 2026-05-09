import React from 'react';

export interface MinaPlusDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusDiamondSolid: React.FC<MinaPlusDiamondSolidProps>;
export default MinaPlusDiamondSolid;
