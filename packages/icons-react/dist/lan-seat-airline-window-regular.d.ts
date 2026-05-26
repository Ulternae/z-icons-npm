import React from 'react';

export interface LanSeatAirlineWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineWindowRegular: React.FC<LanSeatAirlineWindowRegularProps>;
export default LanSeatAirlineWindowRegular;
