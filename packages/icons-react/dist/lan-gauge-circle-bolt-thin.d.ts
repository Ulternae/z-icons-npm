import React from 'react';

export interface LanGaugeCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleBoltThin: React.FC<LanGaugeCircleBoltThinProps>;
export default LanGaugeCircleBoltThin;
