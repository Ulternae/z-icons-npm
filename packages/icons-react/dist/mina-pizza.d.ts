import React from 'react';

export interface MinaPizzaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPizza: React.FC<MinaPizzaProps>;
export default MinaPizza;
