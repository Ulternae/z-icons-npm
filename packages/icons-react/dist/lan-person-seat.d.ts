import React from 'react';

export interface LanPersonSeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeat: React.FC<LanPersonSeatProps>;
export default LanPersonSeat;
