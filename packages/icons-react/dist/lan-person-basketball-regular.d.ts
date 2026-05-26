import React from 'react';

export interface LanPersonBasketballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBasketballRegular: React.FC<LanPersonBasketballRegularProps>;
export default LanPersonBasketballRegular;
