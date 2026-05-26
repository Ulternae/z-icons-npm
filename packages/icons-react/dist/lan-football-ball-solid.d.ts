import React from 'react';

export interface LanFootballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballBallSolid: React.FC<LanFootballBallSolidProps>;
export default LanFootballBallSolid;
