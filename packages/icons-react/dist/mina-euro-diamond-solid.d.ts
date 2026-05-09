import React from 'react';

export interface MinaEuroDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroDiamondSolid: React.FC<MinaEuroDiamondSolidProps>;
export default MinaEuroDiamondSolid;
