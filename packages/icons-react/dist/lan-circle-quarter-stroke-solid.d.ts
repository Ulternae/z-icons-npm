import React from 'react';

export interface LanCircleQuarterStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarterStrokeSolid: React.FC<LanCircleQuarterStrokeSolidProps>;
export default LanCircleQuarterStrokeSolid;
