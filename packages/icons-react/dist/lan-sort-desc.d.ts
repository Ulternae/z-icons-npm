import React from 'react';

export interface LanSortDescProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortDesc: React.FC<LanSortDescProps>;
export default LanSortDesc;
