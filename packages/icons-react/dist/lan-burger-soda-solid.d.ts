import React from 'react';

export interface LanBurgerSodaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerSodaSolid: React.FC<LanBurgerSodaSolidProps>;
export default LanBurgerSodaSolid;
