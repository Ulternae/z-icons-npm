import React from 'react';

export interface LanSquareFlorinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFlorinSolid: React.FC<LanSquareFlorinSolidProps>;
export default LanSquareFlorinSolid;
