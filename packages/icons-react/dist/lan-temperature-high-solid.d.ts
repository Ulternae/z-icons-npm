import React from 'react';

export interface LanTemperatureHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHighSolid: React.FC<LanTemperatureHighSolidProps>;
export default LanTemperatureHighSolid;
