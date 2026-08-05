import React from 'react';

export interface LanBurgerCheeseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerCheeseRegular(props: LanBurgerCheeseRegularProps): React.ReactElement;
export default LanBurgerCheeseRegular;
