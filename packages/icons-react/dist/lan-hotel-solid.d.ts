import React from 'react';

export interface LanHotelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotelSolid: React.FC<LanHotelSolidProps>;
export default LanHotelSolid;
