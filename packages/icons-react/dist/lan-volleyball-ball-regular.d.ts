import React from 'react';

export interface LanVolleyballBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolleyballBallRegular: React.FC<LanVolleyballBallRegularProps>;
export default LanVolleyballBallRegular;
