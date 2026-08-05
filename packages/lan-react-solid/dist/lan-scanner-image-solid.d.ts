import React from 'react';

export interface LanScannerImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerImageSolid(props: LanScannerImageSolidProps): React.ReactElement;
export default LanScannerImageSolid;
