import React from 'react';

export interface LanSquareHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfThin: React.FC<LanSquareHalfThinProps>;
export default LanSquareHalfThin;
