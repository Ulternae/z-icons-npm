import React from 'react';

export interface LanSquareXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXRegular: React.FC<LanSquareXRegularProps>;
export default LanSquareXRegular;
