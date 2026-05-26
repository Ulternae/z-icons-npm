import React from 'react';

export interface LanSeatAirlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineRegular: React.FC<LanSeatAirlineRegularProps>;
export default LanSeatAirlineRegular;
