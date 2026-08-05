import React from 'react';

export interface LanCreditCardFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCreditCardFront(props: LanCreditCardFrontProps): React.ReactElement;
export default LanCreditCardFront;
