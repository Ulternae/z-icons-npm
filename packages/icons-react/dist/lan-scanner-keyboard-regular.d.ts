import React from 'react';

export interface LanScannerKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerKeyboardRegular: React.FC<LanScannerKeyboardRegularProps>;
export default LanScannerKeyboardRegular;
