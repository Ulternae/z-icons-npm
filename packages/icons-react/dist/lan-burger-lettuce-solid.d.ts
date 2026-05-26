import React from 'react';

export interface LanBurgerLettuceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerLettuceSolid: React.FC<LanBurgerLettuceSolidProps>;
export default LanBurgerLettuceSolid;
