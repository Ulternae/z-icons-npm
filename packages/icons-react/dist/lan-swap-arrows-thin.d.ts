import React from 'react';

export interface LanSwapArrowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapArrowsThin: React.FC<LanSwapArrowsThinProps>;
export default LanSwapArrowsThin;
