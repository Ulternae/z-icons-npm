import React from 'react';

export interface NeoWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifiSlash(props: NeoWifiSlashProps): React.ReactElement;
export default NeoWifiSlash;
