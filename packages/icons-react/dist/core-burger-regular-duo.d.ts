import React from 'react';

export interface CoreBurgerRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBurgerRegularDuo: React.FC<CoreBurgerRegularDuoProps>;
export default CoreBurgerRegularDuo;
