import React from 'react';

export interface LanCowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowThin: React.FC<LanCowThinProps>;
export default LanCowThin;
