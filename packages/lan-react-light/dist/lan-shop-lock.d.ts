import React from 'react';

export interface LanShopLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShopLock(props: LanShopLockProps): React.ReactElement;
export default LanShopLock;
