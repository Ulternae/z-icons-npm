import React from 'react';

export interface LanTemperatureSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTemperatureSlashThin: React.FC<LanTemperatureSlashThinProps>;
export default LanTemperatureSlashThin;
