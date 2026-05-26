import React from 'react';

export interface LanJugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugSolid: React.FC<LanJugSolidProps>;
export default LanJugSolid;
