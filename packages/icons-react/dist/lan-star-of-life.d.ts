import React from 'react';

export interface LanStarOfLifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarOfLife: React.FC<LanStarOfLifeProps>;
export default LanStarOfLife;
