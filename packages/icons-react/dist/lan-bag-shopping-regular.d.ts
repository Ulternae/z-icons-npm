import React from 'react';

export interface LanBagShoppingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingRegular: React.FC<LanBagShoppingRegularProps>;
export default LanBagShoppingRegular;
