import React from 'react';

export interface LanLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockRegular: React.FC<LanLockRegularProps>;
export default LanLockRegular;
