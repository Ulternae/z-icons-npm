import React from 'react';

export interface LanHotelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotel: React.FC<LanHotelProps>;
export default LanHotel;
