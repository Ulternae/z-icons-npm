import React from 'react';

export interface LanSquareQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQRegular: React.FC<LanSquareQRegularProps>;
export default LanSquareQRegular;
