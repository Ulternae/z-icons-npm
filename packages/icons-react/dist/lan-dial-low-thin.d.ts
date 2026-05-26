import React from 'react';

export interface LanDialLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialLowThin: React.FC<LanDialLowThinProps>;
export default LanDialLowThin;
