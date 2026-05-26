import React from 'react';

export interface LanSignHangingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignHangingThin: React.FC<LanSignHangingThinProps>;
export default LanSignHangingThin;
