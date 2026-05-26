import React from 'react';

export interface LanSeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeat: React.FC<LanSeatProps>;
export default LanSeat;
