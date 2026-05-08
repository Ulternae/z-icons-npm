import React from 'react';

export interface MinaWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiSlash: React.FC<MinaWifiSlashProps>;
export default MinaWifiSlash;
