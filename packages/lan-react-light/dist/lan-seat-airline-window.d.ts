import React from 'react';

export interface LanSeatAirlineWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineWindow(props: LanSeatAirlineWindowProps): React.ReactElement;
export default LanSeatAirlineWindow;
