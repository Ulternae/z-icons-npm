import React from 'react';

export interface LanCartShoppingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartShoppingThin: React.FC<LanCartShoppingThinProps>;
export default LanCartShoppingThin;
