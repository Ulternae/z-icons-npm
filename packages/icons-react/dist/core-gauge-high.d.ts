import React from 'react';

export interface CoreGaugeHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeHigh: React.FC<CoreGaugeHighProps>;
export default CoreGaugeHigh;
