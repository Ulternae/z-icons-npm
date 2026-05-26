import React from 'react';

export interface LanCalculatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorRegular: React.FC<LanCalculatorRegularProps>;
export default LanCalculatorRegular;
