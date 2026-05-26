import React from 'react';

export interface LanBaseballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBallRegular: React.FC<LanBaseballBallRegularProps>;
export default LanBaseballBallRegular;
