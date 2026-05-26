import React from 'react';

export interface LanBurgerCheeseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerCheeseSolid: React.FC<LanBurgerCheeseSolidProps>;
export default LanBurgerCheeseSolid;
