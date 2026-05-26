import React from 'react';

export interface LanHourglass2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass2Regular: React.FC<LanHourglass2RegularProps>;
export default LanHourglass2Regular;
