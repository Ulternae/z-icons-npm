import React from 'react';

export interface LanVolleyballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolleyballBallSolid: React.FC<LanVolleyballBallSolidProps>;
export default LanVolleyballBallSolid;
