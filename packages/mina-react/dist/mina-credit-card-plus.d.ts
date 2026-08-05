import React from 'react';

export interface MinaCreditCardPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardPlus(props: MinaCreditCardPlusProps): React.ReactElement;
export default MinaCreditCardPlus;
