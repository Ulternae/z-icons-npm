import React from 'react';

export interface MinaPizzaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPizza(props: MinaPizzaProps): React.ReactElement;
export default MinaPizza;
