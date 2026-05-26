import React from 'react';

export interface LanFaceZipperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZipperRegular: React.FC<LanFaceZipperRegularProps>;
export default LanFaceZipperRegular;
