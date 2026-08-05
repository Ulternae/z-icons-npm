import React from 'react';

export interface LanBellSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBellSlashSolid(props: LanBellSlashSolidProps): React.ReactElement;
export default LanBellSlashSolid;
