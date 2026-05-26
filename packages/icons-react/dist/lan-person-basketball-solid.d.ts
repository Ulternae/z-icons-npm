import React from 'react';

export interface LanPersonBasketballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBasketballSolid: React.FC<LanPersonBasketballSolidProps>;
export default LanPersonBasketballSolid;
