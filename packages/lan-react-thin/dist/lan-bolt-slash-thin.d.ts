import React from 'react';

export interface LanBoltSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltSlashThin(props: LanBoltSlashThinProps): React.ReactElement;
export default LanBoltSlashThin;
