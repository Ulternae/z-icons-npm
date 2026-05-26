import React from 'react';

export interface LanBurgerSodaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerSoda: React.FC<LanBurgerSodaProps>;
export default LanBurgerSoda;
