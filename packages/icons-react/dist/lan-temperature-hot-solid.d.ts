import React from 'react';

export interface LanTemperatureHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureHotSolid: React.FC<LanTemperatureHotSolidProps>;
export default LanTemperatureHotSolid;
