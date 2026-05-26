import React from 'react';

export interface LanCalculatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalculatorSolid: React.FC<LanCalculatorSolidProps>;
export default LanCalculatorSolid;
