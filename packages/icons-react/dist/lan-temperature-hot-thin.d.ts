import React from 'react';

export interface LanTemperatureHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHotThin: React.FC<LanTemperatureHotThinProps>;
export default LanTemperatureHotThin;
