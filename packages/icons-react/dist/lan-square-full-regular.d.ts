import React from 'react';

export interface LanSquareFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFullRegular: React.FC<LanSquareFullRegularProps>;
export default LanSquareFullRegular;
