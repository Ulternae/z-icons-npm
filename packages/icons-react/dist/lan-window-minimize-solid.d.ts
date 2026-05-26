import React from 'react';

export interface LanWindowMinimizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMinimizeSolid: React.FC<LanWindowMinimizeSolidProps>;
export default LanWindowMinimizeSolid;
