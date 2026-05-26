import React from 'react';

export interface LanSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortSolid: React.FC<LanSortSolidProps>;
export default LanSortSolid;
