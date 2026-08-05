import React from 'react';

export interface LanCricketBatBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCricketBatBallRegular(props: LanCricketBatBallRegularProps): React.ReactElement;
export default LanCricketBatBallRegular;
