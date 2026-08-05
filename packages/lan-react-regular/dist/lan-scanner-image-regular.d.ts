import React from 'react';

export interface LanScannerImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerImageRegular(props: LanScannerImageRegularProps): React.ReactElement;
export default LanScannerImageRegular;
