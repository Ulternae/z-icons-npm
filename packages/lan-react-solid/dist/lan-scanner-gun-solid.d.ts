import React from 'react';

export interface LanScannerGunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerGunSolid(props: LanScannerGunSolidProps): React.ReactElement;
export default LanScannerGunSolid;
