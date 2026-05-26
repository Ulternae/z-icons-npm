import React from 'react';

export interface LanTemperatureListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureList: React.FC<LanTemperatureListProps>;
export default LanTemperatureList;
