import React from 'react';

export interface LanBurgerFriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerFriesThin: React.FC<LanBurgerFriesThinProps>;
export default LanBurgerFriesThin;
