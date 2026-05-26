import React from 'react';

export interface LanGaugeSimpleLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleLow: React.FC<LanGaugeSimpleLowProps>;
export default LanGaugeSimpleLow;
