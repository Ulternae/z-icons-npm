import React from 'react';

export interface LanFootballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballBallThin: React.FC<LanFootballBallThinProps>;
export default LanFootballBallThin;
