import React from 'react';

export interface LanPersonDotsFromLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDotsFromLineSolid: React.FC<LanPersonDotsFromLineSolidProps>;
export default LanPersonDotsFromLineSolid;
