import React from 'react';

export interface LanSquareHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfRegular: React.FC<LanSquareHalfRegularProps>;
export default LanSquareHalfRegular;
