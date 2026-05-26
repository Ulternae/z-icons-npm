import React from 'react';

export interface LanHandHoldingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingRegular: React.FC<LanHandHoldingRegularProps>;
export default LanHandHoldingRegular;
