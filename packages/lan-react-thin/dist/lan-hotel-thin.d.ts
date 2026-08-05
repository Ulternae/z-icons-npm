import React from 'react';

export interface LanHotelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotelThin(props: LanHotelThinProps): React.ReactElement;
export default LanHotelThin;
