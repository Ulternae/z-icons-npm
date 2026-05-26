import React from 'react';

export interface LanGunSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSlashThin: React.FC<LanGunSlashThinProps>;
export default LanGunSlashThin;
