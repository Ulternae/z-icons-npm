import React from 'react';

export interface LanTemperatureSnowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureSnowThin(props: LanTemperatureSnowThinProps): React.ReactElement;
export default LanTemperatureSnowThin;
