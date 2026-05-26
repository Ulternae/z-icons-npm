import React from 'react';

export interface LanStretcherSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStretcherSolid: React.FC<LanStretcherSolidProps>;
export default LanStretcherSolid;
