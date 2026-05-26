import React from 'react';

export interface LanSortUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSortUp: React.FC<LanSortUpProps>;
export default LanSortUp;
