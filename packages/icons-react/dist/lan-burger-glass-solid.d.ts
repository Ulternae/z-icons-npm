import React from 'react';

export interface LanBurgerGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerGlassSolid: React.FC<LanBurgerGlassSolidProps>;
export default LanBurgerGlassSolid;
