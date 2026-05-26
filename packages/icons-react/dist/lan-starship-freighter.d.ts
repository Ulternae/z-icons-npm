import React from 'react';

export interface LanStarshipFreighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipFreighter: React.FC<LanStarshipFreighterProps>;
export default LanStarshipFreighter;
