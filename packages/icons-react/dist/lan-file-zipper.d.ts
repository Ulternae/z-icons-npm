import React from 'react';

export interface LanFileZipperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipper: React.FC<LanFileZipperProps>;
export default LanFileZipper;
