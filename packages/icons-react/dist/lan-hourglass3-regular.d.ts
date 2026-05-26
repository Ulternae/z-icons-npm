import React from 'react';

export interface LanHourglass3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass3Regular: React.FC<LanHourglass3RegularProps>;
export default LanHourglass3Regular;
