import React from 'react';

export interface LanBarsSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsSortSolid: React.FC<LanBarsSortSolidProps>;
export default LanBarsSortSolid;
