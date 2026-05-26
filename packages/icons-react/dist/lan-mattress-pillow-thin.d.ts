import React from 'react';

export interface LanMattressPillowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMattressPillowThin: React.FC<LanMattressPillowThinProps>;
export default LanMattressPillowThin;
