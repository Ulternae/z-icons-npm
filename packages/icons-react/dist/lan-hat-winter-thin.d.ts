import React from 'react';

export interface LanHatWinterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWinterThin: React.FC<LanHatWinterThinProps>;
export default LanHatWinterThin;
