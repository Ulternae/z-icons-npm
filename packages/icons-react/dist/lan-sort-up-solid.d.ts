import React from 'react';

export interface LanSortUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortUpSolid: React.FC<LanSortUpSolidProps>;
export default LanSortUpSolid;
