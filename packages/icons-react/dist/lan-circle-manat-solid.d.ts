import React from 'react';

export interface LanCircleManatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleManatSolid: React.FC<LanCircleManatSolidProps>;
export default LanCircleManatSolid;
