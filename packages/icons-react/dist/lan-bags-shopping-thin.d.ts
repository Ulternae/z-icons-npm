import React from 'react';

export interface LanBagsShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagsShoppingThin: React.FC<LanBagsShoppingThinProps>;
export default LanBagsShoppingThin;
