import React from 'react';

export interface LanSortUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortUpRegular: React.FC<LanSortUpRegularProps>;
export default LanSortUpRegular;
