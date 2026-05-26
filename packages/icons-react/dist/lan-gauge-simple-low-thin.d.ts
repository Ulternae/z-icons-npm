import React from 'react';

export interface LanGaugeSimpleLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleLowThin: React.FC<LanGaugeSimpleLowThinProps>;
export default LanGaugeSimpleLowThin;
