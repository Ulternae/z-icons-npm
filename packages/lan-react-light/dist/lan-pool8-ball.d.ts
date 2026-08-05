import React from 'react';

export interface LanPool8BallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPool8Ball(props: LanPool8BallProps): React.ReactElement;
export default LanPool8Ball;
