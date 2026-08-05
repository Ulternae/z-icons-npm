import React from 'react';

export interface LanTrafficLightSlowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrafficLightSlowThin(props: LanTrafficLightSlowThinProps): React.ReactElement;
export default LanTrafficLightSlowThin;
