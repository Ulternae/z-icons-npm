import React from 'react';

export interface LanLockAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockAltThin: React.FC<LanLockAltThinProps>;
export default LanLockAltThin;
