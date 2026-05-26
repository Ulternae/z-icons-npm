import React from 'react';

export interface LanHandHoldingHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingHand: React.FC<LanHandHoldingHandProps>;
export default LanHandHoldingHand;
