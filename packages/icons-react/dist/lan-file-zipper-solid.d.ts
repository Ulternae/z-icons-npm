import React from 'react';

export interface LanFileZipperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipperSolid: React.FC<LanFileZipperSolidProps>;
export default LanFileZipperSolid;
