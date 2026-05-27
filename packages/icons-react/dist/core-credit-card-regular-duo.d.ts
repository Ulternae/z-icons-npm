import React from 'react';

export interface CoreCreditCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCreditCardRegularDuo: React.FC<CoreCreditCardRegularDuoProps>;
export default CoreCreditCardRegularDuo;
