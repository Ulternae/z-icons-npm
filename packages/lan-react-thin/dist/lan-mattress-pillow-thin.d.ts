import React from 'react';

export interface LanMattressPillowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMattressPillowThin(props: LanMattressPillowThinProps): React.ReactElement;
export default LanMattressPillowThin;
