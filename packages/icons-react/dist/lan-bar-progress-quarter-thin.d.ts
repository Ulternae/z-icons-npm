import React from 'react';

export interface LanBarProgressQuarterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressQuarterThin: React.FC<LanBarProgressQuarterThinProps>;
export default LanBarProgressQuarterThin;
