import React from 'react';

export interface LanSnowplowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowplowThin: React.FC<LanSnowplowThinProps>;
export default LanSnowplowThin;
