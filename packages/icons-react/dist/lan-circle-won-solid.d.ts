import React from 'react';

export interface LanCircleWonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWonSolid: React.FC<LanCircleWonSolidProps>;
export default LanCircleWonSolid;
