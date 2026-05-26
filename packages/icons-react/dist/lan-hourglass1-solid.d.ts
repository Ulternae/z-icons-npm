import React from 'react';

export interface LanHourglass1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass1Solid: React.FC<LanHourglass1SolidProps>;
export default LanHourglass1Solid;
