import React from 'react';

export interface LanFileCircleXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleXmarkThin: React.FC<LanFileCircleXmarkThinProps>;
export default LanFileCircleXmarkThin;
