import React from 'react';

export interface LanFunctionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFunctionSolid(props: LanFunctionSolidProps): React.ReactElement;
export default LanFunctionSolid;
