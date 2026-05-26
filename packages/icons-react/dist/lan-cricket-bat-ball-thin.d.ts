import React from 'react';

export interface LanCricketBatBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCricketBatBallThin: React.FC<LanCricketBatBallThinProps>;
export default LanCricketBatBallThin;
