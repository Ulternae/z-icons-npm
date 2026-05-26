import React from 'react';

export interface LanGaugeCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleBoltRegular: React.FC<LanGaugeCircleBoltRegularProps>;
export default LanGaugeCircleBoltRegular;
