import React from 'react';

export interface LanFutbolBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFutbolBallRegular: React.FC<LanFutbolBallRegularProps>;
export default LanFutbolBallRegular;
