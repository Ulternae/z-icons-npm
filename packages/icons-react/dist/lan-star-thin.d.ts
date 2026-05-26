import React from 'react';

export interface LanStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarThin: React.FC<LanStarThinProps>;
export default LanStarThin;
