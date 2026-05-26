import React from 'react';

export interface LanCarSirenOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenOnThin: React.FC<LanCarSirenOnThinProps>;
export default LanCarSirenOnThin;
