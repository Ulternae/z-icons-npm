import React from 'react';

export interface LanDiamonds4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamonds4Solid: React.FC<LanDiamonds4SolidProps>;
export default LanDiamonds4Solid;
