import React from 'react';

export interface MinaCoffeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCoffee: React.FC<MinaCoffeeProps>;
export default MinaCoffee;
