import React from 'react';

export interface LanHotelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotelRegular(props: LanHotelRegularProps): React.ReactElement;
export default LanHotelRegular;
