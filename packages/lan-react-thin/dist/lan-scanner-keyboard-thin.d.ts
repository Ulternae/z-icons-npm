import React from 'react';

export interface LanScannerKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerKeyboardThin(props: LanScannerKeyboardThinProps): React.ReactElement;
export default LanScannerKeyboardThin;
