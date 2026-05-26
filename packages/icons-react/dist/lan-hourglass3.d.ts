import React from 'react';

export interface LanHourglass3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass3: React.FC<LanHourglass3Props>;
export default LanHourglass3;
