import React from 'react';

export interface LanFootballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballBall: React.FC<LanFootballBallProps>;
export default LanFootballBall;
