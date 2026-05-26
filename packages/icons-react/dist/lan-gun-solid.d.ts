import React from 'react';

export interface LanGunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGunSolid: React.FC<LanGunSolidProps>;
export default LanGunSolid;
