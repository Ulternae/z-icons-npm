import React from 'react';

export interface LanPool8BallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPool8Ball: React.FC<LanPool8BallProps>;
export default LanPool8Ball;
