import React from 'react';

export interface LanBasketShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBasketShopping(props: LanBasketShoppingProps): React.ReactElement;
export default LanBasketShopping;
