import React from 'react';

export interface LanScannerImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerImageThin(props: LanScannerImageThinProps): React.ReactElement;
export default LanScannerImageThin;
