import React from 'react';

export interface LanSeatsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeats(props: LanSeatsProps): React.ReactElement;
export default LanSeats;
