import React from 'react';

export interface LanSeatAirlineWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeatAirlineWindow: React.FC<LanSeatAirlineWindowProps>;
export default LanSeatAirlineWindow;
