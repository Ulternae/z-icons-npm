import React from 'react';

export interface LanScannerKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerKeyboardSolid: React.FC<LanScannerKeyboardSolidProps>;
export default LanScannerKeyboardSolid;
