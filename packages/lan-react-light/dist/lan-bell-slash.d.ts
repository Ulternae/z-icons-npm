import React from 'react';

export interface LanBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSlash(props: LanBellSlashProps): React.ReactElement;
export default LanBellSlash;
