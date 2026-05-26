import React from 'react';

export interface LanScannerKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerKeyboardThin: React.FC<LanScannerKeyboardThinProps>;
export default LanScannerKeyboardThin;
