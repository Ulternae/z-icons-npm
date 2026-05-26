import React from 'react';

export interface LanStomachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStomachThin: React.FC<LanStomachThinProps>;
export default LanStomachThin;
