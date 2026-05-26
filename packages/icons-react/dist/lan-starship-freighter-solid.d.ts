import React from 'react';

export interface LanStarshipFreighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipFreighterSolid: React.FC<LanStarshipFreighterSolidProps>;
export default LanStarshipFreighterSolid;
