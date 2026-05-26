import React from 'react';

export interface LanHourglass2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass2: React.FC<LanHourglass2Props>;
export default LanHourglass2;
