import React from 'react';

export interface LanSquareALockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareALock: React.FC<LanSquareALockProps>;
export default LanSquareALock;
