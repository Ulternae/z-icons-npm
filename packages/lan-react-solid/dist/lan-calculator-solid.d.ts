import React from 'react';

export interface LanCalculatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalculatorSolid(props: LanCalculatorSolidProps): React.ReactElement;
export default LanCalculatorSolid;
