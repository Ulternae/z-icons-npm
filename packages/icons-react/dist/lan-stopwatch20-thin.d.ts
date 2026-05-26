import React from 'react';

export interface LanStopwatch20ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatch20Thin: React.FC<LanStopwatch20ThinProps>;
export default LanStopwatch20Thin;
