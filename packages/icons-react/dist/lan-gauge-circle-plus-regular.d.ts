import React from 'react';

export interface LanGaugeCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCirclePlusRegular: React.FC<LanGaugeCirclePlusRegularProps>;
export default LanGaugeCirclePlusRegular;
