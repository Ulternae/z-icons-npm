import React from 'react';

export interface LanBaseballBatBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatBallSolid: React.FC<LanBaseballBatBallSolidProps>;
export default LanBaseballBatBallSolid;
