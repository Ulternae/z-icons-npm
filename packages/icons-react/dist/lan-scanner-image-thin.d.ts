import React from 'react';

export interface LanScannerImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerImageThin: React.FC<LanScannerImageThinProps>;
export default LanScannerImageThin;
