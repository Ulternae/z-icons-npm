import React from 'react';

export interface LanScannerKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerKeyboard: React.FC<LanScannerKeyboardProps>;
export default LanScannerKeyboard;
