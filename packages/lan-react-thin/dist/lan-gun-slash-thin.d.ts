import React from 'react';

export interface LanGunSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSlashThin(props: LanGunSlashThinProps): React.ReactElement;
export default LanGunSlashThin;
