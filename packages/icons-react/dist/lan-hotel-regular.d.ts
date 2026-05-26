import React from 'react';

export interface LanHotelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotelRegular: React.FC<LanHotelRegularProps>;
export default LanHotelRegular;
