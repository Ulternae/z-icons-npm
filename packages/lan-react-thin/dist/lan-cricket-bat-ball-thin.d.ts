import React from 'react';

export interface LanCricketBatBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCricketBatBallThin(props: LanCricketBatBallThinProps): React.ReactElement;
export default LanCricketBatBallThin;
