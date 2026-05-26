import React from 'react';

export interface LanHollyBerryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHollyBerry: React.FC<LanHollyBerryProps>;
export default LanHollyBerry;
