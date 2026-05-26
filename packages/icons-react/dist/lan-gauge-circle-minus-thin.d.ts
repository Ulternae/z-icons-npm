import React from 'react';

export interface LanGaugeCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleMinusThin: React.FC<LanGaugeCircleMinusThinProps>;
export default LanGaugeCircleMinusThin;
