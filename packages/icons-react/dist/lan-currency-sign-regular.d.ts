import React from 'react';

export interface LanCurrencySignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurrencySignRegular: React.FC<LanCurrencySignRegularProps>;
export default LanCurrencySignRegular;
