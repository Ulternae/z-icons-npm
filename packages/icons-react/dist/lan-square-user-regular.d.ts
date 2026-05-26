import React from 'react';

export interface LanSquareUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUserRegular: React.FC<LanSquareUserRegularProps>;
export default LanSquareUserRegular;
