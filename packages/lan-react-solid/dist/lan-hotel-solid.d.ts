import React from 'react';

export interface LanHotelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotelSolid(props: LanHotelSolidProps): React.ReactElement;
export default LanHotelSolid;
