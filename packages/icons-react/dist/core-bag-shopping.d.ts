import React from 'react';

export interface CoreBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBagShopping: React.FC<CoreBagShoppingProps>;
export default CoreBagShopping;
