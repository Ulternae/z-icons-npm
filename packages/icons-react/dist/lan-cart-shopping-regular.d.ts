import React from 'react';

export interface LanCartShoppingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartShoppingRegular: React.FC<LanCartShoppingRegularProps>;
export default LanCartShoppingRegular;
