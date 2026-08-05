import React from 'react';

export interface LanScannerTouchscreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerTouchscreenSolid(props: LanScannerTouchscreenSolidProps): React.ReactElement;
export default LanScannerTouchscreenSolid;
