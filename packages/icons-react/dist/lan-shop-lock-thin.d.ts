import React from 'react';

export interface LanShopLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShopLockThin: React.FC<LanShopLockThinProps>;
export default LanShopLockThin;
