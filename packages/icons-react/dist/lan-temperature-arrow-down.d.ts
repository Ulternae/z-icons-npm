import React from 'react';

export interface LanTemperatureArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureArrowDown: React.FC<LanTemperatureArrowDownProps>;
export default LanTemperatureArrowDown;
