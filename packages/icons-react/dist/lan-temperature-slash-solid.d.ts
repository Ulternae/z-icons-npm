import React from 'react';

export interface LanTemperatureSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSlashSolid: React.FC<LanTemperatureSlashSolidProps>;
export default LanTemperatureSlashSolid;
