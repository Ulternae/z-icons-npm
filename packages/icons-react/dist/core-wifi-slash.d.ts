import React from 'react';

export interface CoreWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWifiSlash: React.FC<CoreWifiSlashProps>;
export default CoreWifiSlash;
