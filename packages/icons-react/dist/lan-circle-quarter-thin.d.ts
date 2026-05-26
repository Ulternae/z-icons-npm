import React from 'react';

export interface LanCircleQuarterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuarterThin: React.FC<LanCircleQuarterThinProps>;
export default LanCircleQuarterThin;
