import React from 'react';

export interface LanBaseballBatBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatBallRegular: React.FC<LanBaseballBatBallRegularProps>;
export default LanBaseballBatBallRegular;
