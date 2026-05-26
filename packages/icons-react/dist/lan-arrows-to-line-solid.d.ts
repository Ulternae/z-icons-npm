import React from 'react';

export interface LanArrowsToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToLineSolid: React.FC<LanArrowsToLineSolidProps>;
export default LanArrowsToLineSolid;
