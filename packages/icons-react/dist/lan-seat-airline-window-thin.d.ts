import React from 'react';

export interface LanSeatAirlineWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineWindowThin: React.FC<LanSeatAirlineWindowThinProps>;
export default LanSeatAirlineWindowThin;
