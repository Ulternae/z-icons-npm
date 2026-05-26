import React from 'react';

export interface LanLockHashtagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockHashtagSolid: React.FC<LanLockHashtagSolidProps>;
export default LanLockHashtagSolid;
