import React from 'react';

export interface LanTemperatureHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHighThin: React.FC<LanTemperatureHighThinProps>;
export default LanTemperatureHighThin;
