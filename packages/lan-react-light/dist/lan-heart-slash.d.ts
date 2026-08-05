import React from 'react';

export interface LanHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartSlash(props: LanHeartSlashProps): React.ReactElement;
export default LanHeartSlash;
