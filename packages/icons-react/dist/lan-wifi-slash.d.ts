import React from 'react';

export interface LanWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWifiSlash: React.FC<LanWifiSlashProps>;
export default LanWifiSlash;
