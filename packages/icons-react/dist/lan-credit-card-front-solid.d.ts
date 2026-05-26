import React from 'react';

export interface LanCreditCardFrontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCreditCardFrontSolid: React.FC<LanCreditCardFrontSolidProps>;
export default LanCreditCardFrontSolid;
