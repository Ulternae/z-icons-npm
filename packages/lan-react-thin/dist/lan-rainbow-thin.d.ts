import React from 'react';

export interface LanRainbowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowThin(props: LanRainbowThinProps): React.ReactElement;
export default LanRainbowThin;
