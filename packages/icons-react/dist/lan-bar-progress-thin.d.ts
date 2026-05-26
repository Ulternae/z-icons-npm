import React from 'react';

export interface LanBarProgressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressThin: React.FC<LanBarProgressThinProps>;
export default LanBarProgressThin;
