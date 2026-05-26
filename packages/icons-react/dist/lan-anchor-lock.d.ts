import React from 'react';

export interface LanAnchorLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorLock: React.FC<LanAnchorLockProps>;
export default LanAnchorLock;
