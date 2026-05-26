import React from 'react';

export interface LanLockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockSolid: React.FC<LanLockSolidProps>;
export default LanLockSolid;
