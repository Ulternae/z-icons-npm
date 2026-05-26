import React from 'react';

export interface LanStarshipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarship: React.FC<LanStarshipProps>;
export default LanStarship;
