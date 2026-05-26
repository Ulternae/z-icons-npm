import React from 'react';

export interface LanGaugeSimpleMedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMed: React.FC<LanGaugeSimpleMedProps>;
export default LanGaugeSimpleMed;
