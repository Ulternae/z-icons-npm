import React from 'react';

export interface LanCancerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCancerThin: React.FC<LanCancerThinProps>;
export default LanCancerThin;
