import React from 'react';

export interface LanBagShoppingPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingPlus: React.FC<LanBagShoppingPlusProps>;
export default LanBagShoppingPlus;
