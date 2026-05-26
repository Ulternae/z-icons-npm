import React from 'react';

export interface LanDedentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDedentSolid: React.FC<LanDedentSolidProps>;
export default LanDedentSolid;
