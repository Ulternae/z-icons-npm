import React from 'react';

export interface LanShovelSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelSnowThin(props: LanShovelSnowThinProps): React.ReactElement;
export default LanShovelSnowThin;
