import React from 'react';

export interface MinaEuroDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroDiamond: React.FC<MinaEuroDiamondProps>;
export default MinaEuroDiamond;
