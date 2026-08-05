import React from 'react';

export interface LanWifiSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWifiSlash(props: LanWifiSlashProps): React.ReactElement;
export default LanWifiSlash;
