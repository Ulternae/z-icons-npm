import React from 'react';

export interface LanStarChristmasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarChristmasSolid: React.FC<LanStarChristmasSolidProps>;
export default LanStarChristmasSolid;
