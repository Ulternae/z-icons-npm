import React from 'react';

export interface LanPersonSeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatSolid: React.FC<LanPersonSeatSolidProps>;
export default LanPersonSeatSolid;
