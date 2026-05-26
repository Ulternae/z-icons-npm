import React from 'react';

export interface LanCircleMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMinusRegular: React.FC<LanCircleMinusRegularProps>;
export default LanCircleMinusRegular;
