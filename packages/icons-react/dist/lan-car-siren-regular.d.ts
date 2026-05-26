import React from 'react';

export interface LanCarSirenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenRegular: React.FC<LanCarSirenRegularProps>;
export default LanCarSirenRegular;
