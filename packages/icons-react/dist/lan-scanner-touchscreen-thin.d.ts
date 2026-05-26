import React from 'react';

export interface LanScannerTouchscreenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerTouchscreenThin: React.FC<LanScannerTouchscreenThinProps>;
export default LanScannerTouchscreenThin;
