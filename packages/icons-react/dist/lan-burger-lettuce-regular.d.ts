import React from 'react';

export interface LanBurgerLettuceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerLettuceRegular: React.FC<LanBurgerLettuceRegularProps>;
export default LanBurgerLettuceRegular;
