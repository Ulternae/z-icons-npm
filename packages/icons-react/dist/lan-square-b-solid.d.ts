import React from 'react';

export interface LanSquareBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBSolid: React.FC<LanSquareBSolidProps>;
export default LanSquareBSolid;
