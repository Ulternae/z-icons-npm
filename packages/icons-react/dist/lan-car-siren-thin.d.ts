import React from 'react';

export interface LanCarSirenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSirenThin: React.FC<LanCarSirenThinProps>;
export default LanCarSirenThin;
