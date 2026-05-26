import React from 'react';

export interface LanLocationPinLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationPinLock: React.FC<LanLocationPinLockProps>;
export default LanLocationPinLock;
