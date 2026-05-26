import React from 'react';

export interface LanGaugeCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleMinus: React.FC<LanGaugeCircleMinusProps>;
export default LanGaugeCircleMinus;
