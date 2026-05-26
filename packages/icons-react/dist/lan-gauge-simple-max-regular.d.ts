import React from 'react';

export interface LanGaugeSimpleMaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMaxRegular: React.FC<LanGaugeSimpleMaxRegularProps>;
export default LanGaugeSimpleMaxRegular;
