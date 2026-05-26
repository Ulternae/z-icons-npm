import React from 'react';

export interface LanStarfighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarfighter: React.FC<LanStarfighterProps>;
export default LanStarfighter;
