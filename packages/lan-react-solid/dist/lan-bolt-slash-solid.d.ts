import React from 'react';

export interface LanBoltSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltSlashSolid(props: LanBoltSlashSolidProps): React.ReactElement;
export default LanBoltSlashSolid;
