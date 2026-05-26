import React from 'react';

export interface LanGaugeSimpleMaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMaxThin: React.FC<LanGaugeSimpleMaxThinProps>;
export default LanGaugeSimpleMaxThin;
