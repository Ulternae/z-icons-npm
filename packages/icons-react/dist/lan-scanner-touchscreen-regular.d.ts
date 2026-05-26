import React from 'react';

export interface LanScannerTouchscreenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerTouchscreenRegular: React.FC<LanScannerTouchscreenRegularProps>;
export default LanScannerTouchscreenRegular;
