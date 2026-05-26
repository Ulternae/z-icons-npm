import React from 'react';

export interface LanSquareHalfHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfHorizontal: React.FC<LanSquareHalfHorizontalProps>;
export default LanSquareHalfHorizontal;
