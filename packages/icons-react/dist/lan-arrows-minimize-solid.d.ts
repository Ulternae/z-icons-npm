import React from 'react';

export interface LanArrowsMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsMinimizeSolid: React.FC<LanArrowsMinimizeSolidProps>;
export default LanArrowsMinimizeSolid;
