import React from 'react';

export interface LanSquareSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSmallSolid: React.FC<LanSquareSmallSolidProps>;
export default LanSquareSmallSolid;
