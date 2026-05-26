import React from 'react';

export interface LanFieldHockeyStickBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFieldHockeyStickBallRegular: React.FC<LanFieldHockeyStickBallRegularProps>;
export default LanFieldHockeyStickBallRegular;
