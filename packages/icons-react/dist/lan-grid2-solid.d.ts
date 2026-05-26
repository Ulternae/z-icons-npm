import React from 'react';

export interface LanGrid2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2Solid: React.FC<LanGrid2SolidProps>;
export default LanGrid2Solid;
