import React from 'react';

export interface LanTemperatureHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHot: React.FC<LanTemperatureHotProps>;
export default LanTemperatureHot;
