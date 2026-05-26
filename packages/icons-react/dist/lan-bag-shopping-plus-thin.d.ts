import React from 'react';

export interface LanBagShoppingPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingPlusThin: React.FC<LanBagShoppingPlusThinProps>;
export default LanBagShoppingPlusThin;
