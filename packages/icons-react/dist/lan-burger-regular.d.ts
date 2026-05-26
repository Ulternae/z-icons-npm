import React from 'react';

export interface LanBurgerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerRegular: React.FC<LanBurgerRegularProps>;
export default LanBurgerRegular;
