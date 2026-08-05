import React from 'react';

export interface LanCreditCardBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCreditCardBlank(props: LanCreditCardBlankProps): React.ReactElement;
export default LanCreditCardBlank;
