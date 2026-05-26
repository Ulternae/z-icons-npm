import React from 'react';

export interface LanFootballHelmetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballHelmetSolid: React.FC<LanFootballHelmetSolidProps>;
export default LanFootballHelmetSolid;
