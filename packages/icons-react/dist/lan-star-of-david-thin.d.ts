import React from 'react';

export interface LanStarOfDavidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarOfDavidThin: React.FC<LanStarOfDavidThinProps>;
export default LanStarOfDavidThin;
