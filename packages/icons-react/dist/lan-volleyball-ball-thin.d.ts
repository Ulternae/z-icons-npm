import React from 'react';

export interface LanVolleyballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolleyballBallThin: React.FC<LanVolleyballBallThinProps>;
export default LanVolleyballBallThin;
