import React from 'react';

export interface LanBarsSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsSort: React.FC<LanBarsSortProps>;
export default LanBarsSort;
