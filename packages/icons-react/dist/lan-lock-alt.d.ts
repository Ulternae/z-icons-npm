import React from 'react';

export interface LanLockAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockAlt: React.FC<LanLockAltProps>;
export default LanLockAlt;
