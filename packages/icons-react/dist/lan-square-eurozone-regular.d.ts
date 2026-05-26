import React from 'react';

export interface LanSquareEurozoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEurozoneRegular: React.FC<LanSquareEurozoneRegularProps>;
export default LanSquareEurozoneRegular;
