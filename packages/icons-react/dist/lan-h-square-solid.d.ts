import React from 'react';

export interface LanHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHSquareSolid: React.FC<LanHSquareSolidProps>;
export default LanHSquareSolid;
