import React from 'react';

export interface NeoCreditCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCreditCardRegularDuo: React.FC<NeoCreditCardRegularDuoProps>;
export default NeoCreditCardRegularDuo;
