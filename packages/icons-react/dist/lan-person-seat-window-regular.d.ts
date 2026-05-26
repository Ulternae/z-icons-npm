import React from 'react';

export interface LanPersonSeatWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatWindowRegular: React.FC<LanPersonSeatWindowRegularProps>;
export default LanPersonSeatWindowRegular;
