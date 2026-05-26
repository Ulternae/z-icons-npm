import React from 'react';

export interface LanPersonBasketballThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBasketballThin: React.FC<LanPersonBasketballThinProps>;
export default LanPersonBasketballThin;
