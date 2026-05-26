import React from 'react';

export interface LanLockASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLockASolid: React.FC<LanLockASolidProps>;
export default LanLockASolid;
