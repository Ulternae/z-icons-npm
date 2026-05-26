import React from 'react';

export interface LanCircleCurrencyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCurrencyRegular: React.FC<LanCircleCurrencyRegularProps>;
export default LanCircleCurrencyRegular;
