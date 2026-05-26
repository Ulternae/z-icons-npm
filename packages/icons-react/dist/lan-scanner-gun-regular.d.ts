import React from 'react';

export interface LanScannerGunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerGunRegular: React.FC<LanScannerGunRegularProps>;
export default LanScannerGunRegular;
