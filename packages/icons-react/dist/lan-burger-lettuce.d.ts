import React from 'react';

export interface LanBurgerLettuceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerLettuce: React.FC<LanBurgerLettuceProps>;
export default LanBurgerLettuce;
