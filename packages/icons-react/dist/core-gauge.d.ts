import React from 'react';

export interface CoreGaugeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGauge: React.FC<CoreGaugeProps>;
export default CoreGauge;
