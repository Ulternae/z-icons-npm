import React from 'react';

export interface LanMoonStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarSolid: React.FC<LanMoonStarSolidProps>;
export default LanMoonStarSolid;
