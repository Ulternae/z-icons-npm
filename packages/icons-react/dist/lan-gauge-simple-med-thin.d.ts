import React from 'react';

export interface LanGaugeSimpleMedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMedThin: React.FC<LanGaugeSimpleMedThinProps>;
export default LanGaugeSimpleMedThin;
