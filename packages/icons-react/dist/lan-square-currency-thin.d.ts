import React from 'react';

export interface LanSquareCurrencyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCurrencyThin: React.FC<LanSquareCurrencyThinProps>;
export default LanSquareCurrencyThin;
