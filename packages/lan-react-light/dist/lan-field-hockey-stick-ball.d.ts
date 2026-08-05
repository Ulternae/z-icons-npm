import React from 'react';

export interface LanFieldHockeyStickBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFieldHockeyStickBall(props: LanFieldHockeyStickBallProps): React.ReactElement;
export default LanFieldHockeyStickBall;
