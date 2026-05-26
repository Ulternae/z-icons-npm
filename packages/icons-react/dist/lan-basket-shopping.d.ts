import React from 'react';

export interface LanBasketShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShopping: React.FC<LanBasketShoppingProps>;
export default LanBasketShopping;
