import React from 'react';

export interface LanPersonSeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeat(props: LanPersonSeatProps): React.ReactElement;
export default LanPersonSeat;
