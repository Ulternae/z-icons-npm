import React from 'react';

export interface LanFaceZipperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceZipperSolid: React.FC<LanFaceZipperSolidProps>;
export default LanFaceZipperSolid;
