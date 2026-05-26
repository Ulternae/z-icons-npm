import React from 'react';

export interface LanFunctionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFunctionSolid: React.FC<LanFunctionSolidProps>;
export default LanFunctionSolid;
