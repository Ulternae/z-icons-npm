import React from 'react';

export interface LanTrafficLightSlowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightSlowThin: React.FC<LanTrafficLightSlowThinProps>;
export default LanTrafficLightSlowThin;
