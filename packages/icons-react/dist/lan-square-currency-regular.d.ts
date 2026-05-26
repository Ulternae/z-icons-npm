import React from 'react';

export interface LanSquareCurrencyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCurrencyRegular: React.FC<LanSquareCurrencyRegularProps>;
export default LanSquareCurrencyRegular;
