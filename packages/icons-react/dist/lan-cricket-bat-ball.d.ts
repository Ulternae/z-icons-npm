import React from 'react';

export interface LanCricketBatBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCricketBatBall: React.FC<LanCricketBatBallProps>;
export default LanCricketBatBall;
