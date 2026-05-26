import React from 'react';

export interface LanTemperatureLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureLowSolid: React.FC<LanTemperatureLowSolidProps>;
export default LanTemperatureLowSolid;
