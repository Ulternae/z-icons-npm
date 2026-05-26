import React from 'react';

export interface LanHourglass2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass2Solid: React.FC<LanHourglass2SolidProps>;
export default LanHourglass2Solid;
