import React from 'react';

export interface LanHatChefSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatChefSolid: React.FC<LanHatChefSolidProps>;
export default LanHatChefSolid;
