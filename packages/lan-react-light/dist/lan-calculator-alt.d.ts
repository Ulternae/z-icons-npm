import React from 'react';

export interface LanCalculatorAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorAlt(props: LanCalculatorAltProps): React.ReactElement;
export default LanCalculatorAlt;
