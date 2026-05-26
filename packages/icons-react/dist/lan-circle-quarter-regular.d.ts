import React from 'react';

export interface LanCircleQuarterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarterRegular: React.FC<LanCircleQuarterRegularProps>;
export default LanCircleQuarterRegular;
