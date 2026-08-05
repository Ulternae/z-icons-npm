import React from 'react';

export interface LanGunSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSlashSolid(props: LanGunSlashSolidProps): React.ReactElement;
export default LanGunSlashSolid;
