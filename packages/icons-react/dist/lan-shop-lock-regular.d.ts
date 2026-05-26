import React from 'react';

export interface LanShopLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShopLockRegular: React.FC<LanShopLockRegularProps>;
export default LanShopLockRegular;
