import React from 'react';

export interface NeoBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBagShopping: React.FC<NeoBagShoppingProps>;
export default NeoBagShopping;
