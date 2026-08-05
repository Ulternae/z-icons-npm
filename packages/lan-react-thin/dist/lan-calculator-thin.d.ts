import React from 'react';

export interface LanCalculatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorThin(props: LanCalculatorThinProps): React.ReactElement;
export default LanCalculatorThin;
