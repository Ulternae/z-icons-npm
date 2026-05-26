import React from 'react';

export interface LanJugBottleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugBottleSolid: React.FC<LanJugBottleSolidProps>;
export default LanJugBottleSolid;
