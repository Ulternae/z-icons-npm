import React from 'react';

export interface LanSquareHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalf: React.FC<LanSquareHalfProps>;
export default LanSquareHalf;
