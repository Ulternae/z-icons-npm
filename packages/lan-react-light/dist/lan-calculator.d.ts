import React from 'react';

export interface LanCalculatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculator(props: LanCalculatorProps): React.ReactElement;
export default LanCalculator;
