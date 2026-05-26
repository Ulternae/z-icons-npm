import React from 'react';

export interface LanMountainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainSolid: React.FC<LanMountainSolidProps>;
export default LanMountainSolid;
