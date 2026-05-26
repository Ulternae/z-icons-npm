import React from 'react';

export interface LanCalculatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorThin: React.FC<LanCalculatorThinProps>;
export default LanCalculatorThin;
