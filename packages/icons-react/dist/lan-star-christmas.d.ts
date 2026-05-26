import React from 'react';

export interface LanStarChristmasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarChristmas: React.FC<LanStarChristmasProps>;
export default LanStarChristmas;
