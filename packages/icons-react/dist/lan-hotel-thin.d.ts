import React from 'react';

export interface LanHotelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotelThin: React.FC<LanHotelThinProps>;
export default LanHotelThin;
