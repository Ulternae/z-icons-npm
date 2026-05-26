import React from 'react';

export interface LanExcavatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExcavatorThin: React.FC<LanExcavatorThinProps>;
export default LanExcavatorThin;
