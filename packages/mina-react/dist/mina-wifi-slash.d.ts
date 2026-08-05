import React from 'react';

export interface MinaWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiSlash(props: MinaWifiSlashProps): React.ReactElement;
export default MinaWifiSlash;
