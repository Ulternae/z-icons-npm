import React from 'react';

export interface LanBurgerCheeseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerCheese: React.FC<LanBurgerCheeseProps>;
export default LanBurgerCheese;
