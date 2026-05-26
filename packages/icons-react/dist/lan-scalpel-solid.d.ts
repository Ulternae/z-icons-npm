import React from 'react';

export interface LanScalpelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelSolid: React.FC<LanScalpelSolidProps>;
export default LanScalpelSolid;
