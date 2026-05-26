import React from 'react';

export interface LanScannerGunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerGun: React.FC<LanScannerGunProps>;
export default LanScannerGun;
