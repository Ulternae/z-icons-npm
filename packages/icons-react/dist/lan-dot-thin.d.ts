import React from 'react';

export interface LanDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDotThin: React.FC<LanDotThinProps>;
export default LanDotThin;
