import React from 'react';

export interface LanBurgerGlassRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerGlassRegular: React.FC<LanBurgerGlassRegularProps>;
export default LanBurgerGlassRegular;
