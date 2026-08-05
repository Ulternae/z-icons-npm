import React from 'react';

export interface LanBurgerCheeseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerCheese(props: LanBurgerCheeseProps): React.ReactElement;
export default LanBurgerCheese;
