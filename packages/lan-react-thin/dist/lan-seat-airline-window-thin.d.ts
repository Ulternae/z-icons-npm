import React from 'react';

export interface LanSeatAirlineWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineWindowThin(props: LanSeatAirlineWindowThinProps): React.ReactElement;
export default LanSeatAirlineWindowThin;
