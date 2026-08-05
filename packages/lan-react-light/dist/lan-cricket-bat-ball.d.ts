import React from 'react';

export interface LanCricketBatBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCricketBatBall(props: LanCricketBatBallProps): React.ReactElement;
export default LanCricketBatBall;
