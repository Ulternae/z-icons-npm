import React from 'react';

export interface LanCurrencySignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurrencySign: React.FC<LanCurrencySignProps>;
export default LanCurrencySign;
