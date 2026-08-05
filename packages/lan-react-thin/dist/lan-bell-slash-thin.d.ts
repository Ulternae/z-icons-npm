import React from 'react';

export interface LanBellSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSlashThin(props: LanBellSlashThinProps): React.ReactElement;
export default LanBellSlashThin;
