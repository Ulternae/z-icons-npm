import React from 'react';

export interface LanScannerTouchscreenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerTouchscreenThin(props: LanScannerTouchscreenThinProps): React.ReactElement;
export default LanScannerTouchscreenThin;
