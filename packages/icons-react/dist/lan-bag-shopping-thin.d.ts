import React from 'react';

export interface LanBagShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingThin: React.FC<LanBagShoppingThinProps>;
export default LanBagShoppingThin;
