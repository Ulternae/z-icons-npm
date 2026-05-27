import React from 'react';

export interface CoreBurgerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBurgerSolid: React.FC<CoreBurgerSolidProps>;
export default CoreBurgerSolid;
