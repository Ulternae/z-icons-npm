import React from 'react';

export interface LanSignalStreamSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalStreamSlash(props: LanSignalStreamSlashProps): React.ReactElement;
export default LanSignalStreamSlash;
