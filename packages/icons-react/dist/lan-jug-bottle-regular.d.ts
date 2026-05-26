import React from 'react';

export interface LanJugBottleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugBottleRegular: React.FC<LanJugBottleRegularProps>;
export default LanJugBottleRegular;
