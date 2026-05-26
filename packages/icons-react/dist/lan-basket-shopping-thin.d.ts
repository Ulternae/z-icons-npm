import React from 'react';

export interface LanBasketShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShoppingThin: React.FC<LanBasketShoppingThinProps>;
export default LanBasketShoppingThin;
