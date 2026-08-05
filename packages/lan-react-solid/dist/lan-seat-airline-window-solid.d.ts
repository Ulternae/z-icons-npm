import React from 'react';

export interface LanSeatAirlineWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineWindowSolid(props: LanSeatAirlineWindowSolidProps): React.ReactElement;
export default LanSeatAirlineWindowSolid;
