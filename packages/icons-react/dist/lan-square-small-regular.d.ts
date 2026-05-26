import React from 'react';

export interface LanSquareSmallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSmallRegular: React.FC<LanSquareSmallRegularProps>;
export default LanSquareSmallRegular;
