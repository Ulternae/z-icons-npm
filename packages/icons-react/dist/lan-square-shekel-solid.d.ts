import React from 'react';

export interface LanSquareShekelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareShekelSolid: React.FC<LanSquareShekelSolidProps>;
export default LanSquareShekelSolid;
