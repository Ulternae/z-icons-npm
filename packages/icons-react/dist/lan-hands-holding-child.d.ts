import React from 'react';

export interface LanHandsHoldingChildProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingChild: React.FC<LanHandsHoldingChildProps>;
export default LanHandsHoldingChild;
