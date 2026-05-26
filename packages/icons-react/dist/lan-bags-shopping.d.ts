import React from 'react';

export interface LanBagsShoppingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagsShopping: React.FC<LanBagsShoppingProps>;
export default LanBagsShopping;
