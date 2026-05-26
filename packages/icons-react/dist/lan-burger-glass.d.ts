import React from 'react';

export interface LanBurgerGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerGlass: React.FC<LanBurgerGlassProps>;
export default LanBurgerGlass;
