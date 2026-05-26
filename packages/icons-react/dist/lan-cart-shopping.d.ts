import React from 'react';

export interface LanCartShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartShopping: React.FC<LanCartShoppingProps>;
export default LanCartShopping;
