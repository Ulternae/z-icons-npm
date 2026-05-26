import React from 'react';

export interface LanTemperatureLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureLowThin: React.FC<LanTemperatureLowThinProps>;
export default LanTemperatureLowThin;
