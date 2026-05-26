import React from 'react';

export interface LanHatChefThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatChefThin: React.FC<LanHatChefThinProps>;
export default LanHatChefThin;
