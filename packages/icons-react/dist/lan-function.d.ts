import React from 'react';

export interface LanFunctionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFunction: React.FC<LanFunctionProps>;
export default LanFunction;
