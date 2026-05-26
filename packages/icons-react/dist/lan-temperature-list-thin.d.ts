import React from 'react';

export interface LanTemperatureListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureListThin: React.FC<LanTemperatureListThinProps>;
export default LanTemperatureListThin;
