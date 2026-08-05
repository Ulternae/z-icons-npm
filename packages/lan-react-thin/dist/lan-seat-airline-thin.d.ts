import React from 'react';

export interface LanSeatAirlineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatAirlineThin(props: LanSeatAirlineThinProps): React.ReactElement;
export default LanSeatAirlineThin;
