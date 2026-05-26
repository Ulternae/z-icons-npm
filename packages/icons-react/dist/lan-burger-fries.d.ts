import React from 'react';

export interface LanBurgerFriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerFries: React.FC<LanBurgerFriesProps>;
export default LanBurgerFries;
