import React from 'react';

export interface LanCreditCardBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardBlankRegular: React.FC<LanCreditCardBlankRegularProps>;
export default LanCreditCardBlankRegular;
