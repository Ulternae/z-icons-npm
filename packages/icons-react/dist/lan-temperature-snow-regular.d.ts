import React from 'react';

export interface LanTemperatureSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSnowRegular: React.FC<LanTemperatureSnowRegularProps>;
export default LanTemperatureSnowRegular;
