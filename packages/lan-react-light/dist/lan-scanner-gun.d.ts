import React from 'react';

export interface LanScannerGunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerGun(props: LanScannerGunProps): React.ReactElement;
export default LanScannerGun;
