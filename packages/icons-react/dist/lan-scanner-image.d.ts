import React from 'react';

export interface LanScannerImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScannerImage: React.FC<LanScannerImageProps>;
export default LanScannerImage;
