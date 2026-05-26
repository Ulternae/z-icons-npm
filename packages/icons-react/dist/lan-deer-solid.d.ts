import React from 'react';

export interface LanDeerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeerSolid: React.FC<LanDeerSolidProps>;
export default LanDeerSolid;
