import React from 'react';

export interface LanPizzaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaRegular: React.FC<LanPizzaRegularProps>;
export default LanPizzaRegular;
