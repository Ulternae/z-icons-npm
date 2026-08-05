import React from 'react';

export interface LanBaseballBatBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatBall(props: LanBaseballBatBallProps): React.ReactElement;
export default LanBaseballBatBall;
