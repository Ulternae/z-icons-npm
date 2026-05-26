import React from 'react';

export interface LanSquareXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXmarkSolid: React.FC<LanSquareXmarkSolidProps>;
export default LanSquareXmarkSolid;
