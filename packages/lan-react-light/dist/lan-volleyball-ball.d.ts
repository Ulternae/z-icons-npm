import React from 'react';

export interface LanVolleyballBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolleyballBall(props: LanVolleyballBallProps): React.ReactElement;
export default LanVolleyballBall;
