import React from 'react';

export interface LanPersonSeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatThin(props: LanPersonSeatThinProps): React.ReactElement;
export default LanPersonSeatThin;
