import React from 'react';

export interface LanTemperature2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperature2Solid: React.FC<LanTemperature2SolidProps>;
export default LanTemperature2Solid;
