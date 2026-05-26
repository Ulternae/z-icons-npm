import React from 'react';

export interface LanDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDotSolid: React.FC<LanDotSolidProps>;
export default LanDotSolid;
