import React from 'react';

export interface LanFieldHockeyStickBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFieldHockeyStickBall: React.FC<LanFieldHockeyStickBallProps>;
export default LanFieldHockeyStickBall;
