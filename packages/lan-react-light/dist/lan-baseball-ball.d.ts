import React from 'react';

export interface LanBaseballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBall(props: LanBaseballBallProps): React.ReactElement;
export default LanBaseballBall;
