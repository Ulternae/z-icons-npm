import React from 'react';

export interface LanLockOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockOpenSolid: React.FC<LanLockOpenSolidProps>;
export default LanLockOpenSolid;
