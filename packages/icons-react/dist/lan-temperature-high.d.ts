import React from 'react';

export interface LanTemperatureHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHigh: React.FC<LanTemperatureHighProps>;
export default LanTemperatureHigh;
