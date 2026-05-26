import React from 'react';

export interface LanSquareStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareStarSolid: React.FC<LanSquareStarSolidProps>;
export default LanSquareStarSolid;
