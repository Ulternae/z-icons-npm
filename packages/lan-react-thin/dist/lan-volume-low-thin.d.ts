import React from 'react';

export interface LanVolumeLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeLowThin(props: LanVolumeLowThinProps): React.ReactElement;
export default LanVolumeLowThin;
