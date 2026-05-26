import React from 'react';

export interface LanSeatAirlineWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineWindowSolid: React.FC<LanSeatAirlineWindowSolidProps>;
export default LanSeatAirlineWindowSolid;
