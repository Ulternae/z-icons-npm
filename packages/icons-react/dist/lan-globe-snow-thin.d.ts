import React from 'react';

export interface LanGlobeSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeSnowThin: React.FC<LanGlobeSnowThinProps>;
export default LanGlobeSnowThin;
