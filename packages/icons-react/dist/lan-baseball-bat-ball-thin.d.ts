import React from 'react';

export interface LanBaseballBatBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatBallThin: React.FC<LanBaseballBatBallThinProps>;
export default LanBaseballBatBallThin;
