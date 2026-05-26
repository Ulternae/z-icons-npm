import React from 'react';

export interface LanGaugeCircleMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleMinusRegular: React.FC<LanGaugeCircleMinusRegularProps>;
export default LanGaugeCircleMinusRegular;
