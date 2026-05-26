import React from 'react';

export interface LanCartShoppingFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartShoppingFast: React.FC<LanCartShoppingFastProps>;
export default LanCartShoppingFast;
