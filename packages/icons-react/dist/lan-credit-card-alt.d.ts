import React from 'react';

export interface LanCreditCardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardAlt: React.FC<LanCreditCardAltProps>;
export default LanCreditCardAlt;
