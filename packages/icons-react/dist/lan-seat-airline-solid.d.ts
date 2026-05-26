import React from 'react';

export interface LanSeatAirlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineSolid: React.FC<LanSeatAirlineSolidProps>;
export default LanSeatAirlineSolid;
