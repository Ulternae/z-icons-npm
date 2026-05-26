import React from 'react';

export interface LanPool8BallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPool8BallSolid: React.FC<LanPool8BallSolidProps>;
export default LanPool8BallSolid;
