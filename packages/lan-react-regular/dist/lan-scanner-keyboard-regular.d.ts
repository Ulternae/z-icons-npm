import React from 'react';

export interface LanScannerKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerKeyboardRegular(props: LanScannerKeyboardRegularProps): React.ReactElement;
export default LanScannerKeyboardRegular;
