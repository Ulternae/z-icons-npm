import React from 'react';

export interface LanSquareHalfHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfHorizontalRegular: React.FC<LanSquareHalfHorizontalRegularProps>;
export default LanSquareHalfHorizontalRegular;
