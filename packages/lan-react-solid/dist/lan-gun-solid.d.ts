import React from 'react';

export interface LanGunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSolid(props: LanGunSolidProps): React.ReactElement;
export default LanGunSolid;
