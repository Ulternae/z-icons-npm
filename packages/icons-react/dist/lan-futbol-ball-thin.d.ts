import React from 'react';

export interface LanFutbolBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFutbolBallThin: React.FC<LanFutbolBallThinProps>;
export default LanFutbolBallThin;
