import React from 'react';

export interface LanSeatsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSeats: React.FC<LanSeatsProps>;
export default LanSeats;
