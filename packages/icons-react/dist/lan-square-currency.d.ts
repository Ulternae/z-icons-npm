import React from 'react';

export interface LanSquareCurrencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCurrency: React.FC<LanSquareCurrencyProps>;
export default LanSquareCurrency;
