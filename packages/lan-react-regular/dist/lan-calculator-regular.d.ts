import React from 'react';

export interface LanCalculatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorRegular(props: LanCalculatorRegularProps): React.ReactElement;
export default LanCalculatorRegular;
