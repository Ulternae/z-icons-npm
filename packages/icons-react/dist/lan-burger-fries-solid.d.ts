import React from 'react';

export interface LanBurgerFriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerFriesSolid: React.FC<LanBurgerFriesSolidProps>;
export default LanBurgerFriesSolid;
