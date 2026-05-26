import React from 'react';

export interface LanCircleStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStarSolid: React.FC<LanCircleStarSolidProps>;
export default LanCircleStarSolid;
