import React from 'react';

export interface LanGunSquirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSquirtSolid: React.FC<LanGunSquirtSolidProps>;
export default LanGunSquirtSolid;
