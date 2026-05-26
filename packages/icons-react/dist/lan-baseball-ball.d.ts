import React from 'react';

export interface LanBaseballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBall: React.FC<LanBaseballBallProps>;
export default LanBaseballBall;
