import React from 'react';

export interface LanCircleEurozoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEurozoneRegular: React.FC<LanCircleEurozoneRegularProps>;
export default LanCircleEurozoneRegular;
