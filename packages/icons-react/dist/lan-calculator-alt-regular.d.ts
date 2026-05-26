import React from 'react';

export interface LanCalculatorAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorAltRegular: React.FC<LanCalculatorAltRegularProps>;
export default LanCalculatorAltRegular;
