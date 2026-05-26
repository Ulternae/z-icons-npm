import React from 'react';

export interface LanGaugeSimpleHighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleHighRegular: React.FC<LanGaugeSimpleHighRegularProps>;
export default LanGaugeSimpleHighRegular;
