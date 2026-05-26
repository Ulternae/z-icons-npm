import React from 'react';

export interface LanPizzaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizza: React.FC<LanPizzaProps>;
export default LanPizza;
