import React from 'react';

export interface LanCircleRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRSolid: React.FC<LanCircleRSolidProps>;
export default LanCircleRSolid;
