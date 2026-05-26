import React from 'react';

export interface LanBagShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShopping: React.FC<LanBagShoppingProps>;
export default LanBagShopping;
