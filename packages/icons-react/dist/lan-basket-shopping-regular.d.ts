import React from 'react';

export interface LanBasketShoppingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketShoppingRegular: React.FC<LanBasketShoppingRegularProps>;
export default LanBasketShoppingRegular;
