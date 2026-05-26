import React from 'react';

export interface LanFootballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFootballBallRegular: React.FC<LanFootballBallRegularProps>;
export default LanFootballBallRegular;
