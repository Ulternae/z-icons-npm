import React from 'react';

export interface LanFutbolBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFutbolBallSolid: React.FC<LanFutbolBallSolidProps>;
export default LanFutbolBallSolid;
