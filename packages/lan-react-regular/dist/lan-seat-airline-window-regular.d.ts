import React from 'react';

export interface LanSeatAirlineWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineWindowRegular(props: LanSeatAirlineWindowRegularProps): React.ReactElement;
export default LanSeatAirlineWindowRegular;
