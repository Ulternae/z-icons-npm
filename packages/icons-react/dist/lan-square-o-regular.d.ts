import React from 'react';

export interface LanSquareORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareORegular: React.FC<LanSquareORegularProps>;
export default LanSquareORegular;
