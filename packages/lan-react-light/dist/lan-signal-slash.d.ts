import React from 'react';

export interface LanSignalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalSlash(props: LanSignalSlashProps): React.ReactElement;
export default LanSignalSlash;
