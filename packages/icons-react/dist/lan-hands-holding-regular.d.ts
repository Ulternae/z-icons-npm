import React from 'react';

export interface LanHandsHoldingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHoldingRegular: React.FC<LanHandsHoldingRegularProps>;
export default LanHandsHoldingRegular;
