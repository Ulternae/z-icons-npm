import React from 'react';

export interface LanSeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeat(props: LanSeatProps): React.ReactElement;
export default LanSeat;
