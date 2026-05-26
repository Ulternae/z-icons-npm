import React from 'react';

export interface LanGrid3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid3Solid: React.FC<LanGrid3SolidProps>;
export default LanGrid3Solid;
