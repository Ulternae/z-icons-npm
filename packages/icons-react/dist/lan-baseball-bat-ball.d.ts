import React from 'react';

export interface LanBaseballBatBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatBall: React.FC<LanBaseballBatBallProps>;
export default LanBaseballBatBall;
