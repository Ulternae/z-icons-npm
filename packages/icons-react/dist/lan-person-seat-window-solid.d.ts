import React from 'react';

export interface LanPersonSeatWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatWindowSolid: React.FC<LanPersonSeatWindowSolidProps>;
export default LanPersonSeatWindowSolid;
