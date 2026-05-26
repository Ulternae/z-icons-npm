import React from 'react';

export interface LanRugbyBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugbyBallSolid: React.FC<LanRugbyBallSolidProps>;
export default LanRugbyBallSolid;
