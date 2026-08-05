import React from 'react';

export interface LanCoffeeBeanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBean(props: LanCoffeeBeanProps): React.ReactElement;
export default LanCoffeeBean;
