import React from 'react';

export interface LanShopLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShopLock: React.FC<LanShopLockProps>;
export default LanShopLock;
