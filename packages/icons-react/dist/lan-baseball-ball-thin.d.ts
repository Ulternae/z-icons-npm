import React from 'react';

export interface LanBaseballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBallThin: React.FC<LanBaseballBallThinProps>;
export default LanBaseballBallThin;
