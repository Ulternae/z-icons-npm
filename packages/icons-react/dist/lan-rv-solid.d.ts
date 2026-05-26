import React from 'react';

export interface LanRvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRvSolid: React.FC<LanRvSolidProps>;
export default LanRvSolid;
