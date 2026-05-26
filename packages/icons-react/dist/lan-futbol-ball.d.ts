import React from 'react';

export interface LanFutbolBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFutbolBall: React.FC<LanFutbolBallProps>;
export default LanFutbolBall;
