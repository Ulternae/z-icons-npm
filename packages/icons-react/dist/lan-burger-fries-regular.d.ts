import React from 'react';

export interface LanBurgerFriesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerFriesRegular: React.FC<LanBurgerFriesRegularProps>;
export default LanBurgerFriesRegular;
