import React from 'react';

export interface LanCheckSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckSquareSolid: React.FC<LanCheckSquareSolidProps>;
export default LanCheckSquareSolid;
