import React from 'react';

export interface LanWifiSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWifiSlashThin: React.FC<LanWifiSlashThinProps>;
export default LanWifiSlashThin;
