import React from 'react';

export interface LanLockARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockARegular: React.FC<LanLockARegularProps>;
export default LanLockARegular;
