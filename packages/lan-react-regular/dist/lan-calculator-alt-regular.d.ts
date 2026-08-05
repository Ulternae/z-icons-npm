import React from 'react';

export interface LanCalculatorAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorAltRegular(props: LanCalculatorAltRegularProps): React.ReactElement;
export default LanCalculatorAltRegular;
