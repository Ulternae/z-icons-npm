import React from 'react';

export interface LanCircleCurrencyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCurrencyThin: React.FC<LanCircleCurrencyThinProps>;
export default LanCircleCurrencyThin;
