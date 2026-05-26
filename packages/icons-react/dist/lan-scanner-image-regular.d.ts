import React from 'react';

export interface LanScannerImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerImageRegular: React.FC<LanScannerImageRegularProps>;
export default LanScannerImageRegular;
