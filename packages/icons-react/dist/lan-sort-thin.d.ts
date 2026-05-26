import React from 'react';

export interface LanSortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortThin: React.FC<LanSortThinProps>;
export default LanSortThin;
