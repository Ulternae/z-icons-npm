import React from 'react';

export interface LanJugBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugBottle: React.FC<LanJugBottleProps>;
export default LanJugBottle;
