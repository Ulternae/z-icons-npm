import React from 'react';

export interface LanGunSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSlash(props: LanGunSlashProps): React.ReactElement;
export default LanGunSlash;
