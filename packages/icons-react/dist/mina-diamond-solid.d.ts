import React from 'react';

export interface MinaDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiamondSolid: React.FC<MinaDiamondSolidProps>;
export default MinaDiamondSolid;
