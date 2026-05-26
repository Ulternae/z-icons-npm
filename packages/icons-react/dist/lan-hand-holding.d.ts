import React from 'react';

export interface LanHandHoldingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHolding: React.FC<LanHandHoldingProps>;
export default LanHandHolding;
