import React from 'react';

export interface LanScannerGunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerGunSolid: React.FC<LanScannerGunSolidProps>;
export default LanScannerGunSolid;
