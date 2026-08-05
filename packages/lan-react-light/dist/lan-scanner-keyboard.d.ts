import React from 'react';

export interface LanScannerKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerKeyboard(props: LanScannerKeyboardProps): React.ReactElement;
export default LanScannerKeyboard;
