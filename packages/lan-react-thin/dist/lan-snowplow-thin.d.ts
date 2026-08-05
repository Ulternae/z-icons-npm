import React from 'react';

export interface LanSnowplowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowplowThin(props: LanSnowplowThinProps): React.ReactElement;
export default LanSnowplowThin;
