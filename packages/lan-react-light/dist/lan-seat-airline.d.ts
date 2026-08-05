import React from 'react';

export interface LanSeatAirlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirline(props: LanSeatAirlineProps): React.ReactElement;
export default LanSeatAirline;
