import React from 'react';

export interface LanHandsHoldingDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingDollar: React.FC<LanHandsHoldingDollarProps>;
export default LanHandsHoldingDollar;
