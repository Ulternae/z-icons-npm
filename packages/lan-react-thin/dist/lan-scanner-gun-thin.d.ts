import React from 'react';

export interface LanScannerGunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerGunThin(props: LanScannerGunThinProps): React.ReactElement;
export default LanScannerGunThin;
