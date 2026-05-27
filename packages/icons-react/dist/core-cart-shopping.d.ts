import React from 'react';

export interface CoreCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCartShopping: React.FC<CoreCartShoppingProps>;
export default CoreCartShopping;
