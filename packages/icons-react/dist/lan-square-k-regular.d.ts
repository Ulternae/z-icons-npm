import React from 'react';

export interface LanSquareKRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKRegular: React.FC<LanSquareKRegularProps>;
export default LanSquareKRegular;
