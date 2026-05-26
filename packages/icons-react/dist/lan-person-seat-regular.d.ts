import React from 'react';

export interface LanPersonSeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSeatRegular: React.FC<LanPersonSeatRegularProps>;
export default LanPersonSeatRegular;
