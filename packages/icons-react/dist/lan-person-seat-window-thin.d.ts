import React from 'react';

export interface LanPersonSeatWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatWindowThin: React.FC<LanPersonSeatWindowThinProps>;
export default LanPersonSeatWindowThin;
