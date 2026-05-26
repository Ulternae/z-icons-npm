import React from 'react';

export interface LanSeatAirlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirline: React.FC<LanSeatAirlineProps>;
export default LanSeatAirline;
