import React from 'react';

export interface LanCalculatorAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorAltThin: React.FC<LanCalculatorAltThinProps>;
export default LanCalculatorAltThin;
