import React from 'react';

export interface LanGunSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSlashRegular: React.FC<LanGunSlashRegularProps>;
export default LanGunSlashRegular;
