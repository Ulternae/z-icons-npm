import React from 'react';

export interface LanDialMedLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedLowThin: React.FC<LanDialMedLowThinProps>;
export default LanDialMedLowThin;
