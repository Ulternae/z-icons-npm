import React from 'react';

export interface LanMoonStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoonStarsSolid: React.FC<LanMoonStarsSolidProps>;
export default LanMoonStarsSolid;
