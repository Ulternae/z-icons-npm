import React from 'react';

export interface LanRugbyBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugbyBall: React.FC<LanRugbyBallProps>;
export default LanRugbyBall;
