import React from 'react';

export interface LanStarfighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarfighterSolid: React.FC<LanStarfighterSolidProps>;
export default LanStarfighterSolid;
