import React from 'react';

export interface LanGaugeSimpleMinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMinThin: React.FC<LanGaugeSimpleMinThinProps>;
export default LanGaugeSimpleMinThin;
