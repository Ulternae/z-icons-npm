import React from 'react';

export interface LanHandsHoldingChildThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingChildThin: React.FC<LanHandsHoldingChildThinProps>;
export default LanHandsHoldingChildThin;
