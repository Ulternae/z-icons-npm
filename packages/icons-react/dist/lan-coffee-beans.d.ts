import React from 'react';

export interface LanCoffeeBeansProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeans: React.FC<LanCoffeeBeansProps>;
export default LanCoffeeBeans;
