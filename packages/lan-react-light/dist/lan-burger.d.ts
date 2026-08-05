import React from 'react';

export interface LanBurgerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurger(props: LanBurgerProps): React.ReactElement;
export default LanBurger;
