import React from 'react';

export interface LanCreditCardBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardBlankThin: React.FC<LanCreditCardBlankThinProps>;
export default LanCreditCardBlankThin;
