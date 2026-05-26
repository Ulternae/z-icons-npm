import React from 'react';

export interface LanCurrencySignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurrencySignThin: React.FC<LanCurrencySignThinProps>;
export default LanCurrencySignThin;
