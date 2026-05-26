import React from 'react';

export interface LanHourglass1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass1: React.FC<LanHourglass1Props>;
export default LanHourglass1;
