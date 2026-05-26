import React from 'react';

export interface LanCricketBatBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCricketBatBallSolid: React.FC<LanCricketBatBallSolidProps>;
export default LanCricketBatBallSolid;
