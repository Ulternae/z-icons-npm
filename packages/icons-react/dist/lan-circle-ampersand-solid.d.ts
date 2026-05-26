import React from 'react';

export interface LanCircleAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleAmpersandSolid: React.FC<LanCircleAmpersandSolidProps>;
export default LanCircleAmpersandSolid;
