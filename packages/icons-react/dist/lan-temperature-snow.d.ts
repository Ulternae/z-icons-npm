import React from 'react';

export interface LanTemperatureSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSnow: React.FC<LanTemperatureSnowProps>;
export default LanTemperatureSnow;
