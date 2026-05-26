import React from 'react';

export interface LanStarshipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarshipThin: React.FC<LanStarshipThinProps>;
export default LanStarshipThin;
