import React from 'react';

export interface LanScarecrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarecrow: React.FC<LanScarecrowProps>;
export default LanScarecrow;
