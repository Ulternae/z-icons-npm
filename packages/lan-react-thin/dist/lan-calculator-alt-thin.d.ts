import React from 'react';

export interface LanCalculatorAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorAltThin(props: LanCalculatorAltThinProps): React.ReactElement;
export default LanCalculatorAltThin;
