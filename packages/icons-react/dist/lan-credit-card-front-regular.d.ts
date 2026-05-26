import React from 'react';

export interface LanCreditCardFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardFrontRegular: React.FC<LanCreditCardFrontRegularProps>;
export default LanCreditCardFrontRegular;
