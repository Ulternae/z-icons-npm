import React from 'react';

export interface LanFutbolBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFutbolBall(props: LanFutbolBallProps): React.ReactElement;
export default LanFutbolBall;
