import React from 'react';

export interface LanTemperatureArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureArrowUp: React.FC<LanTemperatureArrowUpProps>;
export default LanTemperatureArrowUp;
