import React from 'react';

export interface LanFaceZipperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZipperThin: React.FC<LanFaceZipperThinProps>;
export default LanFaceZipperThin;
