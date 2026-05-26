import React from 'react';

export interface LanScannerImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerImageSolid: React.FC<LanScannerImageSolidProps>;
export default LanScannerImageSolid;
