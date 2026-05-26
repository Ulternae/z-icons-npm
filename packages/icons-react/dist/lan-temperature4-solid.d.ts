import React from 'react';

export interface LanTemperature4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperature4Solid: React.FC<LanTemperature4SolidProps>;
export default LanTemperature4Solid;
