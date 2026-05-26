import React from 'react';

export interface LanTemperatureSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSnowSolid: React.FC<LanTemperatureSnowSolidProps>;
export default LanTemperatureSnowSolid;
