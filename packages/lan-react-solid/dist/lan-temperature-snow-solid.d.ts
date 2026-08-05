import React from 'react';

export interface LanTemperatureSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureSnowSolid(props: LanTemperatureSnowSolidProps): React.ReactElement;
export default LanTemperatureSnowSolid;
