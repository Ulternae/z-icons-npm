import React from 'react';

export interface LanLockAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockA: React.FC<LanLockAProps>;
export default LanLockA;
