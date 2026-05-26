import React from 'react';

export interface LanSortDescThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortDescThin: React.FC<LanSortDescThinProps>;
export default LanSortDescThin;
