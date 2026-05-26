import React from 'react';

export interface LanDrawSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawSquareSolid: React.FC<LanDrawSquareSolidProps>;
export default LanDrawSquareSolid;
