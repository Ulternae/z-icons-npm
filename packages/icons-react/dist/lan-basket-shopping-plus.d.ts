import React from 'react';

export interface LanBasketShoppingPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShoppingPlus: React.FC<LanBasketShoppingPlusProps>;
export default LanBasketShoppingPlus;
