import React from 'react';

export interface LanSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSort: React.FC<LanSortProps>;
export default LanSort;
