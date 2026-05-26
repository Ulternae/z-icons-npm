import React from 'react';

export interface LanHourglass1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass1Regular: React.FC<LanHourglass1RegularProps>;
export default LanHourglass1Regular;
