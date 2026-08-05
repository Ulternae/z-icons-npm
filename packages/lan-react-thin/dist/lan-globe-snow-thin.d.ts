import React from 'react';

export interface LanGlobeSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeSnowThin(props: LanGlobeSnowThinProps): React.ReactElement;
export default LanGlobeSnowThin;
