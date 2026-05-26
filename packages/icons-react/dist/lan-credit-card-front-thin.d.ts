import React from 'react';

export interface LanCreditCardFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardFrontThin: React.FC<LanCreditCardFrontThinProps>;
export default LanCreditCardFrontThin;
