import React from 'react';

export interface LanPersonBasketballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBasketball: React.FC<LanPersonBasketballProps>;
export default LanPersonBasketball;
