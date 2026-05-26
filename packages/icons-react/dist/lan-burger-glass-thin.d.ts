import React from 'react';

export interface LanBurgerGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerGlassThin: React.FC<LanBurgerGlassThinProps>;
export default LanBurgerGlassThin;
