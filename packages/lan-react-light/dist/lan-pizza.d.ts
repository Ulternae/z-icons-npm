import React from 'react';

export interface LanPizzaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPizza(props: LanPizzaProps): React.ReactElement;
export default LanPizza;
