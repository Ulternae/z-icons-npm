import React from 'react';

export interface LanGaugeSimpleMedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMedRegular: React.FC<LanGaugeSimpleMedRegularProps>;
export default LanGaugeSimpleMedRegular;
