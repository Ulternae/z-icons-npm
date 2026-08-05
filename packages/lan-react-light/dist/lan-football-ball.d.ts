import React from 'react';

export interface LanFootballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFootballBall(props: LanFootballBallProps): React.ReactElement;
export default LanFootballBall;
