import React from 'react';

export interface LanGaugeSimpleMinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMin: React.FC<LanGaugeSimpleMinProps>;
export default LanGaugeSimpleMin;
