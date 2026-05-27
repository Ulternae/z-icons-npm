import React from 'react';

export interface NeoWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWifiSlash: React.FC<NeoWifiSlashProps>;
export default NeoWifiSlash;
