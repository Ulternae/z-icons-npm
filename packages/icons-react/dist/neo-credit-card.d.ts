import React from 'react';

export interface NeoCreditCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCreditCard: React.FC<NeoCreditCardProps>;
export default NeoCreditCard;
