import React from 'react';

export interface LanScannerTouchscreenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerTouchscreen(props: LanScannerTouchscreenProps): React.ReactElement;
export default LanScannerTouchscreen;
