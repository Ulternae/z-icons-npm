import React from 'react';

export interface LanBurgerSodaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerSodaThin: React.FC<LanBurgerSodaThinProps>;
export default LanBurgerSodaThin;
