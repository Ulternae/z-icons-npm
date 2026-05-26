import React from 'react';

export interface LanFileZipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipSolid: React.FC<LanFileZipSolidProps>;
export default LanFileZipSolid;
