import React from 'react';

export interface LanBurgerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerSolid: React.FC<LanBurgerSolidProps>;
export default LanBurgerSolid;
