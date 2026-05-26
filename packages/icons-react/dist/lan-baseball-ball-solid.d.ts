import React from 'react';

export interface LanBaseballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBallSolid: React.FC<LanBaseballBallSolidProps>;
export default LanBaseballBallSolid;
