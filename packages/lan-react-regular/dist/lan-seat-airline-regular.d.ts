import React from 'react';

export interface LanSeatAirlineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineRegular(props: LanSeatAirlineRegularProps): React.ReactElement;
export default LanSeatAirlineRegular;
