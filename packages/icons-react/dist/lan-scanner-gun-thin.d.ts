import React from 'react';

export interface LanScannerGunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerGunThin: React.FC<LanScannerGunThinProps>;
export default LanScannerGunThin;
