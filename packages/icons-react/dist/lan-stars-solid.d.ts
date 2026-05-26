import React from 'react';

export interface LanStarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarsSolid: React.FC<LanStarsSolidProps>;
export default LanStarsSolid;
