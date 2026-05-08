import React from 'react';

export interface MinaCreditCardPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardPlus: React.FC<MinaCreditCardPlusProps>;
export default MinaCreditCardPlus;
