import React from 'react';

export interface LanScannerImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScannerImage(props: LanScannerImageProps): React.ReactElement;
export default LanScannerImage;
