import React from 'react';

export interface LanHourglass3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglass3Solid: React.FC<LanHourglass3SolidProps>;
export default LanHourglass3Solid;
