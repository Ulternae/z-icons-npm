import React from 'react';

export interface LanScannerTouchscreenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerTouchscreenRegular(props: LanScannerTouchscreenRegularProps): React.ReactElement;
export default LanScannerTouchscreenRegular;
