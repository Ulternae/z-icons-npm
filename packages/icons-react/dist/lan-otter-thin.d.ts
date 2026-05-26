import React from 'react';

export interface LanOtterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOtterThin: React.FC<LanOtterThinProps>;
export default LanOtterThin;
