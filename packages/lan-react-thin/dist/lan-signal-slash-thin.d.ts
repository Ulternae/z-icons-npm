import React from 'react';

export interface LanSignalSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalSlashThin(props: LanSignalSlashThinProps): React.ReactElement;
export default LanSignalSlashThin;
