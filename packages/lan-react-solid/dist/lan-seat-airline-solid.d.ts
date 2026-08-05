import React from 'react';

export interface LanSeatAirlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineSolid(props: LanSeatAirlineSolidProps): React.ReactElement;
export default LanSeatAirlineSolid;
