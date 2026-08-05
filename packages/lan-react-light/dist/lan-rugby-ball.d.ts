import React from 'react';

export interface LanRugbyBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugbyBall(props: LanRugbyBallProps): React.ReactElement;
export default LanRugbyBall;
