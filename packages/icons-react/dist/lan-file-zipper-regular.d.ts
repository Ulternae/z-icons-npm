import React from 'react';

export interface LanFileZipperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipperRegular: React.FC<LanFileZipperRegularProps>;
export default LanFileZipperRegular;
