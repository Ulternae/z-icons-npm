import React from 'react';

export interface LanVolumeLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeLowThin: React.FC<LanVolumeLowThinProps>;
export default LanVolumeLowThin;
