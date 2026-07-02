import React from 'react';

export interface CoreWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWifiSlash(props: CoreWifiSlashProps): React.ReactElement;
export default CoreWifiSlash;
