import React from 'react';

export interface LanTemperatureLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureLowThin(props: LanTemperatureLowThinProps): React.ReactElement;
export default LanTemperatureLowThin;
