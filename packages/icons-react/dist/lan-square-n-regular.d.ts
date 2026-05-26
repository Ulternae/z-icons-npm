import React from 'react';

export interface LanSquareNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNRegular: React.FC<LanSquareNRegularProps>;
export default LanSquareNRegular;
