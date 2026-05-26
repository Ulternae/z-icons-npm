import React from 'react';

export interface LanStarShootingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarShootingThin: React.FC<LanStarShootingThinProps>;
export default LanStarShootingThin;
