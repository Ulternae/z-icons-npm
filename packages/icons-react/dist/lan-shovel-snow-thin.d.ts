import React from 'react';

export interface LanShovelSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovelSnowThin: React.FC<LanShovelSnowThinProps>;
export default LanShovelSnowThin;
