import React from 'react';

export interface LanBasketShoppingMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShoppingMinus: React.FC<LanBasketShoppingMinusProps>;
export default LanBasketShoppingMinus;
