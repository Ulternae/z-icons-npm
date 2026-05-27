import React from 'react';

export interface CoreBurgerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBurger: React.FC<CoreBurgerProps>;
export default CoreBurger;
