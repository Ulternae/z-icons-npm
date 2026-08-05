import React from 'react';

export interface LanCricketBatBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCricketBatBallSolid(props: LanCricketBatBallSolidProps): React.ReactElement;
export default LanCricketBatBallSolid;
