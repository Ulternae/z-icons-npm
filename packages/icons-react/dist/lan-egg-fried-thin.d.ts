import React from 'react';

export interface LanEggFriedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggFriedThin: React.FC<LanEggFriedThinProps>;
export default LanEggFriedThin;
