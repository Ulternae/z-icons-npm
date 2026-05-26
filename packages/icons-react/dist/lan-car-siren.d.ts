import React from 'react';

export interface LanCarSirenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSiren: React.FC<LanCarSirenProps>;
export default LanCarSiren;
