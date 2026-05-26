import React from 'react';

export interface LanBurgerCheeseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerCheeseRegular: React.FC<LanBurgerCheeseRegularProps>;
export default LanBurgerCheeseRegular;
