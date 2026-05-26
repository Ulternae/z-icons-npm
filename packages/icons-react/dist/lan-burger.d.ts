import React from 'react';

export interface LanBurgerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurger: React.FC<LanBurgerProps>;
export default LanBurger;
