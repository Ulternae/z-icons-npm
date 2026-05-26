import React from 'react';

export interface LanPersonSeatReclinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatReclined: React.FC<LanPersonSeatReclinedProps>;
export default LanPersonSeatReclined;
