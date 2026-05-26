import React from 'react';

export interface LanLockHashtagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockHashtagRegular: React.FC<LanLockHashtagRegularProps>;
export default LanLockHashtagRegular;
