import React from 'react';

export interface LanCabinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinThin: React.FC<LanCabinThinProps>;
export default LanCabinThin;
