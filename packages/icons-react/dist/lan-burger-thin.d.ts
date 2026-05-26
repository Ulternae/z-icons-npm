import React from 'react';

export interface LanBurgerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerThin: React.FC<LanBurgerThinProps>;
export default LanBurgerThin;
