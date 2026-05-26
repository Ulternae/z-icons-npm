import React from 'react';

export interface LanSkullCowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCowThin: React.FC<LanSkullCowThinProps>;
export default LanSkullCowThin;
