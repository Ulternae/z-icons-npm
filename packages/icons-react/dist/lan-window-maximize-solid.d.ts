import React from 'react';

export interface LanWindowMaximizeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMaximizeSolid: React.FC<LanWindowMaximizeSolidProps>;
export default LanWindowMaximizeSolid;
