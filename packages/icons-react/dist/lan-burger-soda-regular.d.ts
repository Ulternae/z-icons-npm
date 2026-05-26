import React from 'react';

export interface LanBurgerSodaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerSodaRegular: React.FC<LanBurgerSodaRegularProps>;
export default LanBurgerSodaRegular;
