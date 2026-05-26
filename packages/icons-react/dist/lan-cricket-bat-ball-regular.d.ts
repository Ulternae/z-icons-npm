import React from 'react';

export interface LanCricketBatBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCricketBatBallRegular: React.FC<LanCricketBatBallRegularProps>;
export default LanCricketBatBallRegular;
