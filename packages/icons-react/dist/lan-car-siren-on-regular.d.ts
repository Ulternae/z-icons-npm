import React from 'react';

export interface LanCarSirenOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenOnRegular: React.FC<LanCarSirenOnRegularProps>;
export default LanCarSirenOnRegular;
