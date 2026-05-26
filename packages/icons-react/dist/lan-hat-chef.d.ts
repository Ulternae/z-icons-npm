import React from 'react';

export interface LanHatChefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatChef: React.FC<LanHatChefProps>;
export default LanHatChef;
