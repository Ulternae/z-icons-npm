import React from 'react';

export interface LanSquareLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLSolid: React.FC<LanSquareLSolidProps>;
export default LanSquareLSolid;
