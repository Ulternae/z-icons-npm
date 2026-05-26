import React from 'react';

export interface LanSquareHalfHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfHorizontalThin: React.FC<LanSquareHalfHorizontalThinProps>;
export default LanSquareHalfHorizontalThin;
