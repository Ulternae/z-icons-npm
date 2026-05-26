import React from 'react';

export interface LanLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLock: React.FC<LanLockProps>;
export default LanLock;
