import React from 'react';

export interface LanGunSquirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSquirtSolid(props: LanGunSquirtSolidProps): React.ReactElement;
export default LanGunSquirtSolid;
