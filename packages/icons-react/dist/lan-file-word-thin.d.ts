import React from 'react';

export interface LanFileWordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWordThin: React.FC<LanFileWordThinProps>;
export default LanFileWordThin;
