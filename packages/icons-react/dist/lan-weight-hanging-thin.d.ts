import React from 'react';

export interface LanWeightHangingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWeightHangingThin: React.FC<LanWeightHangingThinProps>;
export default LanWeightHangingThin;
