import React from 'react';

export interface LanCartFlatbedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartFlatbedSolid: React.FC<LanCartFlatbedSolidProps>;
export default LanCartFlatbedSolid;
