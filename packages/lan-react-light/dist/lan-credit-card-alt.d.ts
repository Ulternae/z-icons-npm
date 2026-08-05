import React from 'react';

export interface LanCreditCardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCreditCardAlt(props: LanCreditCardAltProps): React.ReactElement;
export default LanCreditCardAlt;
