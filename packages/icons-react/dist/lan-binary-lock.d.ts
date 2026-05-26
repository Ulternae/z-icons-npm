import React from 'react';

export interface LanBinaryLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryLock: React.FC<LanBinaryLockProps>;
export default LanBinaryLock;
