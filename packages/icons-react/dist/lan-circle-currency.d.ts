import React from 'react';

export interface LanCircleCurrencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCurrency: React.FC<LanCircleCurrencyProps>;
export default LanCircleCurrency;
