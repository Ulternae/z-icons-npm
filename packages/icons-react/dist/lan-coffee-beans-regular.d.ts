import React from 'react';

export interface LanCoffeeBeansRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoffeeBeansRegular: React.FC<LanCoffeeBeansRegularProps>;
export default LanCoffeeBeansRegular;
