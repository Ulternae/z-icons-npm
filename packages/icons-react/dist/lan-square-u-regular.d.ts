import React from 'react';

export interface LanSquareURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareURegular: React.FC<LanSquareURegularProps>;
export default LanSquareURegular;
