import React from 'react';

export interface LanCircleQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarter: React.FC<LanCircleQuarterProps>;
export default LanCircleQuarter;
