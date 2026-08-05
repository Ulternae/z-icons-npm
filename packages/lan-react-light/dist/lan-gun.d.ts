import React from 'react';

export interface LanGunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGun(props: LanGunProps): React.ReactElement;
export default LanGun;
