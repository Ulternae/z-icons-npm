import React from 'react';

export interface LanGaugeSimpleMaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMax: React.FC<LanGaugeSimpleMaxProps>;
export default LanGaugeSimpleMax;
