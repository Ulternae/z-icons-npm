import React from 'react';

export interface LanArrowsFromLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsFromLineSolid: React.FC<LanArrowsFromLineSolidProps>;
export default LanArrowsFromLineSolid;
