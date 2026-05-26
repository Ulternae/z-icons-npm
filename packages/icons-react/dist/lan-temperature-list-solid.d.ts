import React from 'react';

export interface LanTemperatureListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureListSolid: React.FC<LanTemperatureListSolidProps>;
export default LanTemperatureListSolid;
