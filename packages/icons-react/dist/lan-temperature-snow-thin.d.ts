import React from 'react';

export interface LanTemperatureSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSnowThin: React.FC<LanTemperatureSnowThinProps>;
export default LanTemperatureSnowThin;
