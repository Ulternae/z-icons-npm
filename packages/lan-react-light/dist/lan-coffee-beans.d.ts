import React from 'react';

export interface LanCoffeeBeansProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeans(props: LanCoffeeBeansProps): React.ReactElement;
export default LanCoffeeBeans;
