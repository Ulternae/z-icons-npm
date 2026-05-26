import React from 'react';

export interface LanCalculatorAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorAltSolid: React.FC<LanCalculatorAltSolidProps>;
export default LanCalculatorAltSolid;
