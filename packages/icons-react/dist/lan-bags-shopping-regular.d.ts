import React from 'react';

export interface LanBagsShoppingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagsShoppingRegular: React.FC<LanBagsShoppingRegularProps>;
export default LanBagsShoppingRegular;
