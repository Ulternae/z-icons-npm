import React from 'react';

export interface LanTemperatureLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureLow: React.FC<LanTemperatureLowProps>;
export default LanTemperatureLow;
