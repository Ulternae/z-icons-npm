import React from 'react';

export interface LanSquareRupiahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupiahRegular: React.FC<LanSquareRupiahRegularProps>;
export default LanSquareRupiahRegular;
