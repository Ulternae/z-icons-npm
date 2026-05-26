import React from 'react';

export interface LanHandsWashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsWashRegular: React.FC<LanHandsWashRegularProps>;
export default LanHandsWashRegular;
