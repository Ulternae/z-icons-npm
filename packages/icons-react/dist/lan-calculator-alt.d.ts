import React from 'react';

export interface LanCalculatorAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorAlt: React.FC<LanCalculatorAltProps>;
export default LanCalculatorAlt;
