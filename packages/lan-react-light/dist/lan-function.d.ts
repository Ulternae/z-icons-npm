import React from 'react';

export interface LanFunctionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFunction(props: LanFunctionProps): React.ReactElement;
export default LanFunction;
