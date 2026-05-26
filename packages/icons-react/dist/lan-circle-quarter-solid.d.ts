import React from 'react';

export interface LanCircleQuarterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarterSolid: React.FC<LanCircleQuarterSolidProps>;
export default LanCircleQuarterSolid;
