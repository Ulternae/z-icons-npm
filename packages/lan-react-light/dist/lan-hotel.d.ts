import React from 'react';

export interface LanHotelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotel(props: LanHotelProps): React.ReactElement;
export default LanHotel;
