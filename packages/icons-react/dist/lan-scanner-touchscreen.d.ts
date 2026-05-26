import React from 'react';

export interface LanScannerTouchscreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerTouchscreen: React.FC<LanScannerTouchscreenProps>;
export default LanScannerTouchscreen;
