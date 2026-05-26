import React from 'react';

export interface LanVolleyballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolleyballBall: React.FC<LanVolleyballBallProps>;
export default LanVolleyballBall;
