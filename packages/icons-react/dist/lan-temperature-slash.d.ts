import React from 'react';

export interface LanTemperatureSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSlash: React.FC<LanTemperatureSlashProps>;
export default LanTemperatureSlash;
