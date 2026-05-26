import React from 'react';

export interface LanHandsHoldingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingThin: React.FC<LanHandsHoldingThinProps>;
export default LanHandsHoldingThin;
