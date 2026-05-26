import React from 'react';

export interface LanCircleYSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYSolid: React.FC<LanCircleYSolidProps>;
export default LanCircleYSolid;
