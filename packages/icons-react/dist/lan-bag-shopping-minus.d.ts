import React from 'react';

export interface LanBagShoppingMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingMinus: React.FC<LanBagShoppingMinusProps>;
export default LanBagShoppingMinus;
