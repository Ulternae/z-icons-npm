import React from 'react';

export interface LanTemperatureListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureListRegular: React.FC<LanTemperatureListRegularProps>;
export default LanTemperatureListRegular;
