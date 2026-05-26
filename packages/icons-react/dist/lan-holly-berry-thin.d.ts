import React from 'react';

export interface LanHollyBerryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHollyBerryThin: React.FC<LanHollyBerryThinProps>;
export default LanHollyBerryThin;
