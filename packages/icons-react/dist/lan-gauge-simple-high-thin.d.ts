import React from 'react';

export interface LanGaugeSimpleHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleHighThin: React.FC<LanGaugeSimpleHighThinProps>;
export default LanGaugeSimpleHighThin;
