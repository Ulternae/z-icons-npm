import React from 'react';

export interface LanCoffeeBeanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBean: React.FC<LanCoffeeBeanProps>;
export default LanCoffeeBean;
