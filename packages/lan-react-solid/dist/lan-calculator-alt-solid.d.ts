import React from 'react';

export interface LanCalculatorAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorAltSolid(props: LanCalculatorAltSolidProps): React.ReactElement;
export default LanCalculatorAltSolid;
