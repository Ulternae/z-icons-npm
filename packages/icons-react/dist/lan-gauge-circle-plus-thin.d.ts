import React from 'react';

export interface LanGaugeCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCirclePlusThin: React.FC<LanGaugeCirclePlusThinProps>;
export default LanGaugeCirclePlusThin;
