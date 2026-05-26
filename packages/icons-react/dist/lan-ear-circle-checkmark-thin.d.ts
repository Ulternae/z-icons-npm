import React from 'react';

export interface LanEarCircleCheckmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarCircleCheckmarkThin: React.FC<LanEarCircleCheckmarkThinProps>;
export default LanEarCircleCheckmarkThin;
