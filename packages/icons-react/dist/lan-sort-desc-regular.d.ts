import React from 'react';

export interface LanSortDescRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortDescRegular: React.FC<LanSortDescRegularProps>;
export default LanSortDescRegular;
