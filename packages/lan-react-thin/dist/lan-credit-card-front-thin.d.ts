import React from 'react';

export interface LanCreditCardFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCreditCardFrontThin(props: LanCreditCardFrontThinProps): React.ReactElement;
export default LanCreditCardFrontThin;
