import React from 'react';

export interface LanSortDescSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortDescSolid: React.FC<LanSortDescSolidProps>;
export default LanSortDescSolid;
