import React from 'react';

export interface LanHatWinterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatWinter: React.FC<LanHatWinterProps>;
export default LanHatWinter;
