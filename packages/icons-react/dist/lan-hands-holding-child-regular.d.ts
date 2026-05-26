import React from 'react';

export interface LanHandsHoldingChildRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingChildRegular: React.FC<LanHandsHoldingChildRegularProps>;
export default LanHandsHoldingChildRegular;
