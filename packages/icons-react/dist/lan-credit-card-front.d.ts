import React from 'react';

export interface LanCreditCardFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardFront: React.FC<LanCreditCardFrontProps>;
export default LanCreditCardFront;
