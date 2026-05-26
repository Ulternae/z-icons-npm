import React from 'react';

export interface LanCircleQuartersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuartersSolid: React.FC<LanCircleQuartersSolidProps>;
export default LanCircleQuartersSolid;
