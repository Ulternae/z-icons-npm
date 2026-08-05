import React from 'react';

export interface LanCoffeeBeansRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffeeBeansRegular(props: LanCoffeeBeansRegularProps): React.ReactElement;
export default LanCoffeeBeansRegular;
