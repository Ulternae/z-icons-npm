import React from 'react';

export interface LanCreditCardBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardBlank: React.FC<LanCreditCardBlankProps>;
export default LanCreditCardBlank;
