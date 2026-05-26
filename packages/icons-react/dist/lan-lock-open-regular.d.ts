import React from 'react';

export interface LanLockOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockOpenRegular: React.FC<LanLockOpenRegularProps>;
export default LanLockOpenRegular;
