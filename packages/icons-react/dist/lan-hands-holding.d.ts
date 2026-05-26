import React from 'react';

export interface LanHandsHoldingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHolding: React.FC<LanHandsHoldingProps>;
export default LanHandsHolding;
