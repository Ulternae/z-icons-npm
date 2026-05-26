import React from 'react';

export interface LanCreditCardAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardAltThin: React.FC<LanCreditCardAltThinProps>;
export default LanCreditCardAltThin;
