import React from 'react';

export interface LanGunSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSlashSolid: React.FC<LanGunSlashSolidProps>;
export default LanGunSlashSolid;
