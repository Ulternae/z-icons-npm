import React from 'react';

export interface LanFaceZipperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZipper: React.FC<LanFaceZipperProps>;
export default LanFaceZipper;
