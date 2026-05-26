import React from 'react';

export interface LanScannerTouchscreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerTouchscreenSolid: React.FC<LanScannerTouchscreenSolidProps>;
export default LanScannerTouchscreenSolid;
