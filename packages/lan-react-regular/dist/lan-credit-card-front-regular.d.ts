import React from 'react';

export interface LanCreditCardFrontRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCreditCardFrontRegular(props: LanCreditCardFrontRegularProps): React.ReactElement;
export default LanCreditCardFrontRegular;
