import React from 'react';

export interface LanFlatbreadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlatbreadSolid: React.FC<LanFlatbreadSolidProps>;
export default LanFlatbreadSolid;
