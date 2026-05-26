import React from 'react';

export interface LanBracketsSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsSquareSolid: React.FC<LanBracketsSquareSolidProps>;
export default LanBracketsSquareSolid;
