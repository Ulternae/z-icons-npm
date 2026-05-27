import React from 'react';

export interface NeoGaugeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGauge: React.FC<NeoGaugeProps>;
export default NeoGauge;
