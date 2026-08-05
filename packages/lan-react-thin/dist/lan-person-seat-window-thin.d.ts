import React from 'react';

export interface LanPersonSeatWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatWindowThin(props: LanPersonSeatWindowThinProps): React.ReactElement;
export default LanPersonSeatWindowThin;
