import React from 'react';

export interface LanCalculatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculator: React.FC<LanCalculatorProps>;
export default LanCalculator;
